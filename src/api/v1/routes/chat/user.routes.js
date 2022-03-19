import { userController } from "../../controllers/chat";
import { tryCatchHandle } from "../../utils";

function userRoutes(app) {
    app.get('/chat/user/vendors', tryCatchHandle(userController().getAllVendors));
    app.get('/chat/user/customers', tryCatchHandle(userController().getAllCustomers));
}

export { userRoutes }