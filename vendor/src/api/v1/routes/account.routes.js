import { accountController } from "../controllers";
import { tryCatchHandle } from "../utils";

function accountRoutes(app) {
    //Business Information
    app.get('/vendor/business-info', tryCatchHandle(accountController().getBusinessInfo));
}
export { accountRoutes };