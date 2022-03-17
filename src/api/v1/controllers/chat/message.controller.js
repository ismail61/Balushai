import { sendMessage } from "../../services/chat"

const messageController = () => {
    return {
        sendMessage: async(req, res) => {
            const sentMessage = await sendMessage(req.body, res)
            res.status(200).json(sentMessage)
        }
    }
}

export { messageController };