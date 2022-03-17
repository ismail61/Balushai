import { messageRoutes } from "./message.routes"

function ChatRoutes(app) {
    messageRoutes(app)
}

export { ChatRoutes }