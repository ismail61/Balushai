import { authController } from "../../controllers/vendor";
import { tryCatchHandle } from "../../utils";

function authRoutes(app) {
    app.get('/vendor/sign-in', tryCatchHandle(authController().signInPageShow));
    app.post('/vendor/sign-in', tryCatchHandle(authController().emailSignIn));
    app.post('/vendor/sign-in', tryCatchHandle(authController().phoneSignIn));
    app.get('/vendor/sign-up', tryCatchHandle(authController().signUpPageShow));
    app.post('/vendor/sign-up', tryCatchHandle(authController().signUp));

    //Otp 
    /* app.post('/vendor/send-otp', tryCatchHandle(authController().sendOtpInPhoneNumber));
    app.post('/vendor/verify-otp', tryCatchHandle(authController().verifyOtp)); */
}
export { authRoutes };