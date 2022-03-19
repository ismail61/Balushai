import { messageRoutes } from "./message.routes"
import { userRoutes } from "./user.routes"

function ChatRoutes(app) {
    messageRoutes(app)
    userRoutes(app)
}

export { ChatRoutes }