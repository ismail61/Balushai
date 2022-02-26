import { findOneUsingEmailOrPhoneNumber } from "../../services/auth.services"
import { error, generatePasswordHash } from "../../utils"
import { signUpValidation } from "../../validations/signUp.validation"

function authController() {
    return {
        signInPageShow: (req, res) => { res.status(200).json(req?.user) },

        signIn: (req, res) => {

        },

        signUpPageShow: (req, res) => { res.status(200).json(req?.user) },

        signUp: (req, res) => {
            const { name, email, phone, password, confirmPassword } = req.body
            
            const validator = await signUpValidation(req.body)
            if (validator.error) return error().resourceError(res, validator.error?.details[0].message, 422)

            const user = await findOneUsingEmailOrPhoneNumber(User, { $or: [{ email: email }, { phone: phone }] });
            if (user) return error().resourceError(res, 'Email or Phone Number already exists. Please choose a different Email or Phone Number', 409)

            const hashPassword = await generatePasswordHash(password);

            // escape validate

            // save into mongo db
        },
    }
}
export { authController };