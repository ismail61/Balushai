import { createAdmin, findAdminByIDAndTokenUpdate, findAdminUsingEmail } from "../../services/admin";
import { error, generateToken, generateTokenTracker, passwordCompare, objectValidatorEscape } from "../../utils"
import { signInValidation, adminSignUpValidation } from "../../validations"

function authController() {
    return {
        signIn: async (req, res) => {
            const { email, password } = req.body;

            // Validate all information
            const validation = signInValidation(req.body);
            if (validation.error) return error().resourceError(res, validation.error?.details[0].message, 422);

            //find a admin using email
            const admin = await findAdminUsingEmail({ email });
            if (!admin) return error().resourceError(res, 'Invalid Credentials', 401);

            const passwordMatch = await passwordCompare(password, admin);
            if (!passwordMatch) return error().resourceError(res, 'Invalid Credentials', 401);


            const verifyTokenTracker = await generateTokenTracker();
            const token = generateToken(admin, verifyTokenTracker);

            await findAdminByIDAndTokenUpdate({_id : admin._id}, { token: verifyTokenTracker });
            res.status(200).json({ token: token });
        },

        signUp: async (req, res) => {
            // De-Structure data from req.body
            const { email, phone, password } = req.body;

            // Validate all information
            const validation = adminSignUpValidation(req.body);
            if (validation.error) return error().resourceError(res, validation.error?.details[0].message, 422);

            //find a admin is assigned to the same email
            const user = await findAdminUsingEmail({ email });
            if (user) return error().resourceError(res, 'Email already exists. Please choose a different Email', 409);

            //malicious data refactor
            const refactor_data = await objectValidatorEscape(req.body);

            // save into mongo db
            const data = await createAdmin(refactor_data);
            res.status(201).json(data);
        },
    }
}
export { authController };