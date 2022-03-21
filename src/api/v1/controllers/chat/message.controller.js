import { sendMessage } from "../../services/chat"

const messageController = () => {
    return {
        customerSendMessage: async(req, res) => {


            let newData = req.body;
          
            newData.customer_id = req.user?._id

            console.log(newData)
            const sentMessage = await sendMessage(newData, res)
            res.status(200).json(sentMessage)
        },

        vendorSendMessage: async(req, res) => {
            let newData = req.body;
         
            newData['vendor_id'] = req.user?._id
            console.log(newData)

            const sentMessage = await sendMessage(newData, res)
            res.status(200).json(sentMessage)
        }
    }
}

export { messageController };