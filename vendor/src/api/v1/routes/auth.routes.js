import { authController } from "../controllers/auth/auth.controller";
import { tryCatchHandle } from "../utils";

function authRoutes(app) {
    app.get('/sign-in', tryCatchHandle(authController().signInPageShow));
    app.post('/sign-in', tryCatchHandle(authController().signIn));
    app.get('/sign-up', tryCatchHandle(authController().signUpPageShow));
    app.post('/sign-up', tryCatchHandle(authController().signUp));
}
export { authRoutes };