import { createVendor, findVendorUsingEmail, findVendorUsingEmailOrPhoneNumber, findVendorUsingShopName } from "../services"
import { findVendorByIDAndUpdate } from "../services/account.services"
import { error, generateToken, generateTokenTracker, passwordCompare, validatorEscape } from "../utils"
import { signInValidation, signUpValidation } from "../validations"

function authController() {
    return {
        signInPageShow: (req, res) => { res.status(200).json(req?.user) },

        signIn: async (req, res) => {
            const { email, password } = req.body;
            const validation = signInValidation(email, password);
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

        signUpPageShow: (req, res) => { res.status(200).json(req?.user) },

        signUp: async (req, res) => {
            // De-Structure data from req.body
            const { shop_name, email, phone, password, confirmPassword } = req.body;
            // Validate all information
            const validation = signUpValidation(req.body);
            if (validation.error) return error().resourceError(res, validation.error?.details[0].message, 422);
            //find a user is assigned to the same email or phone
            const user = await findVendorUsingEmailOrPhoneNumber({ $or: [{ "seller_account.email": email }, { "seller_account.phone": phone }, { "seller_account.shop_name": shop_name }] });
            if (user) return error().resourceError(res, 'Email or Phone Number already exists. Please choose a different Email or Phone Number', 409);

            const shop_name_checker = await findVendorUsingShopName({ "seller_account.shop_name": shop_name });
            if (shop_name_checker) return error().resourceError(res, 'Please choose a different Shop Name', 409);

            //malicious data refactor
            const refactor_data = await validatorEscape(req.body);

            // save into mongo db
            const data = await createVendor(refactor_data);
            res.status(201).json(data);
        },
    }
}
export { authController };