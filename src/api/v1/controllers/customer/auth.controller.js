import { createCustomer, findCustomerUsingEmail, findCustomerByIDAndTokenUpdate } from "../../services/customer"
import { error, generateToken, generateTokenTracker, passwordCompare, validatorEscape } from "../../utils"
import { signInValidation, customerSignUpValidation } from "../../validations"

function authController() {
    return {
        signInPageShow: (req, res) => { res.status(200).json(req?.user) },

        signIn: async (req, res) => {
            const { email, password } = req.body;

            // Validate all information
            const validation = signInValidation(email, password);
            if (validation.error) return error().resourceError(res, validation.error?.details[0].message, 422);

            //find a customer using email
            const user = await findCustomerUsingEmail({ email }, res);
            if (!user) return error().resourceError(res, 'Invalid Credentials.', 401);

            const passwordMatch = await passwordCompare(password, user);
            
            console.log(passwordMatch)
            if (!passwordMatch) return error().resourceError(res, 'Invalid Credentials!', 401);


            const verifyTokenTracker = await generateTokenTracker();
            const token = generateToken(user, verifyTokenTracker);

            await findCustomerByIDAndTokenUpdate({_id : user._id}, { token: verifyTokenTracker }, res);
            res.status(200).json({ token: token });
        },

        signUpPageShow: (req, res) => { res.status(200).json(req?.user) },

        signUp: async (req, res) => {
            // De-Structure data from req.body
            const { name, email, phone, password } = req.body;

            // Validate all information
            const validation = customerSignUpValidation(req.body);
            if (validation.error) return error().resourceError(res, validation.error?.details[0].message, 422);

            //find a customer is assigned to the same email
            const user = await findCustomerUsingEmail({ email });
            if (user) return error().resourceError(res, 'Email already exists. Please choose a different Email', 409);

            //malicious data refactor
            const refactor_data = await validatorEscape(req.body);

            // save into mongo db
            const data = await createCustomer(refactor_data, res);
            res.status(201).json(data);
        },
    }
}
export { authController };