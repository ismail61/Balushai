import { messageController } from "../../controllers/chat";
import { tryCatchHandle } from "../../utils";

function messageRoutes(app) {
    app.post('/chat/send-message', tryCatchHandle(messageController().sendMessage));
}

export { messageRoutes }