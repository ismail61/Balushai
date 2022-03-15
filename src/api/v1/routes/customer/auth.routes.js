import { authController } from "../../controllers/customer";
import { tryCatchHandle } from "../../utils";

function authRoutes(app) {
    app.get('/customer/sign-in', tryCatchHandle(authController().signInPageShow));
    app.post('/customer/sign-in', tryCatchHandle(authController().signIn));
    app.get('/customer/sign-up', tryCatchHandle(authController().signUpPageShow));
    app.post('/customer/sign-up', tryCatchHandle(authController().signUp));
}
export { authRoutes };