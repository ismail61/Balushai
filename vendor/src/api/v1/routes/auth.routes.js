import { authController } from "../controllers";
import { tryCatchHandle } from "../utils";

function authRoutes(app) {
    app.get('/vendor/sign-in', tryCatchHandle(authController().signInPageShow));
    app.post('/vendor/sign-in', tryCatchHandle(authController().signIn));
    app.get('/vendor/sign-up', tryCatchHandle(authController().signUpPageShow));
    app.post('/vendor/sign-up', tryCatchHandle(authController().signUp));
}
export { authRoutes };