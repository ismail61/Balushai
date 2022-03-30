import { authController } from "../../controllers/admin";
import { tryCatchHandle } from "../../utils";

function authRoutes(app) {
    app.post('/admin/sign-in', tryCatchHandle(authController().signIn));
    app.post('/admin/sign-up', tryCatchHandle(authController().signUp));
}
export { authRoutes };