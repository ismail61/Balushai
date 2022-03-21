import { messageController } from "../../controllers/chat";
import { customerAuthentication } from "../../middlewares/customer";
import { vendorAuthentication } from "../../middlewares/vendor";
import { tryCatchHandle } from "../../utils";

function messageRoutes(app) {
    app.post('/customer/chat/send-message', customerAuthentication, tryCatchHandle(messageController().customerSendMessage));
    app.post('/vendor/chat/send-message', vendorAuthentication, tryCatchHandle(messageController().vendorSendMessage));
}

export { messageRoutes }