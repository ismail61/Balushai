import { createVendor, deleteOtp, findVendorUsingEmail, findVendorUsingEmailOrPhoneNumber, findVendorUsingPhone, findVendorUsingShopName, insertOtp, verifyPhoneOtp } from "../../services/vendor"
import { findVendorByIDAndUpdate } from "../../services/vendor/account.services"
import { error, generateToken, generateTokenTracker, passwordCompare, phoneSmsErrorMessage, objectValidatorEscape } from "../../utils"
import { phoneAndOtpValidation, phoneNumberValidation, phoneSignInValidation, signInValidation, vendorSignUpValidation } from "../../validations"
import { config } from '../../../../config';
import request from 'request';
const TEN_MINUTES = 10 * 60 * 1000;
const ONE_MINUTES = 1 * 60 * 1000;

function authController() {
    return {
        signInPageShow: (req, res) => { res.status(200).json(req?.user) },

        emailSignIn: async (req, res) => {
            const { email, password } = req.body;
            const validation = signInValidation(req.body);
            if (validation.error) return error().resourceError(res, validation.error?.details[0].message, 422);

            const vendor = await findVendorUsingEmail({ "seller_account.email": email });
            if (!vendor) return error().resourceError(res, 'Invalid Credentials', 401);

            const passwordMatch = await passwordCompare(password, vendor);
            if (!passwordMatch) return error().resourceError(res, 'Invalid Credentials', 401);


            const verifyTokenTracker = await generateTokenTracker();
            const token = generateToken(vendor, verifyTokenTracker);

            await findVendorByIDAndUpdate(vendor._id, { token: verifyTokenTracker });
            res.status(200).json({ token: token });
        },

        phoneSignIn: async (req, res) => {
            const { phone, password } = req.body;
            const validation = phoneSignInValidation(req.body);
            if (validation.error) return error().resourceError(res, validation.error?.details[0].message, 422);

            const vendor = await findVendorUsingPhone({ "seller_account.phone": phone });
            if (!vendor) return error().resourceError(res, 'Invalid Credentials', 401);

            const passwordMatch = await passwordCompare(password, vendor);
            if (!passwordMatch) return error().resourceError(res, 'Invalid Credentials', 401);


            const verifyTokenTracker = await generateTokenTracker();
            const token = generateToken(vendor, verifyTokenTracker);

            await findVendorByIDAndUpdate(vendor._id, { token: verifyTokenTracker });
            res.status(200).json({ token: token });
        },


        signUpPageShow: (req, res) => { res.status(200).json(req?.user) },

        signUp: async (req, res) => {
            // De-Structure data from req.body
            const { shop_name, email, phone, password, confirmPassword } = req.body;
            // Validate all information
            const validation = vendorSignUpValidation(req.body);
            if (validation.error) return error().resourceError(res, validation.error?.details[0].message, 422);
            //find a user is assigned to the same email or phone
            const user = await findVendorUsingEmailOrPhoneNumber({ $or: [{ "seller_account.email": email }, { "seller_account.phone": phone }] });
            if (user) return error().resourceError(res, 'Email or Phone Number already exists. Please choose a different Email or Phone Number', 409);

            const shop_name_checker = await findVendorUsingShopName({ "seller_account.shop_name": shop_name });
            if (shop_name_checker) return error().resourceError(res, 'Please choose a different Shop Name', 409);

            //malicious data refactor
            const refactor_data = await objectValidatorEscape(req.body);

            // save into mongo db
            const data = await createVendor(refactor_data, res);
            res.status(201).json(data);
        },

        //Otp 
        sendOtpInPhoneNumber: async (req, res) => {
            const { sms } = config;
            const { phone } = req.body;

            const validation = phoneNumberValidation(req.body);
            if (validation.error) return error().resourceError(res, validation.error?.details[0].message, 422);

            const vendor = await findVendorUsingPhone({ "seller_account.phone": phone });
            if (vendor) return error().resourceError(res, 'Already have an account.Please sign in or Forgot your Password', 401);

            const random = 100000 + Math.floor(Math.random() * 900000);
            const message = `Your Balushai OTP is ${random}`;

            var options = {
                'method': 'POST',
                'url': `${sms.uri}?username=${sms.username}&password=${sms.password}&number=${phone}&message=${message}`,
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            };
            request(options, async function (error, response) {
                if (error) return error().resourceError(res, 'Something went wrong', 500);
                const code = response?.body;
                if (code?.includes('1101')) {
                    //otp expire time -> one minute
                    const insertedOtp = await insertOtp({
                        phone,
                        otp: random,
                        expire_time: Date.now() + ONE_MINUTES
                    })
                    if (insertedOtp) {
                        //after send otp , delete all info of current insertedOtp after 10 minutes
                        setTimeout(async () => {
                            await deleteOtp({ _id: insertedOtp?._id });
                        }, new Date().getTime() + TEN_MINUTES);
                    }
                    return res.status(200).json({ message: "Message Send Successful. Please check your Phone Number" })
                }
                return phoneSmsErrorMessage(Number(code), res);
            });
        },
        verifyOtp: async (req, res) => {
            const { otp, phone } = req.body;

            const validation = phoneAndOtpValidation(req.body);
            if (validation.error) return error().resourceError(res, validation.error?.details[0].message, 422);

            const verified = await verifyPhoneOtp({ phone, otp, expire_time: { $gt: Date.now() } })
            if (!verified) return error().resourceError(res, 'Invalid OTP or OTP is Expired. Please try again after some time', 409);

            res.status(200).json({ message: 'Verified Successful' });
        },
    }
}
export { authController };