import mongoose from "mongoose"
import { createOrder, deleteOrder, getAllOrders, getSingleOrder, updateOrder } from "../services"
import { error } from "../utils"
import { orderValidation } from "../validations"

const orderController = () => {
    return {

        // Create an order
        createOrder: async (req, res) => {
            const validation = orderValidation(req.body)
            if (validation.error) return error().resourceError(res, validation.error?.details[0].message, 422)

            const addedOrder = await createOrder(req.body)
            res.status(200).json(addedOrder);
        },

        // Find single product by ID 
        getSingleOrder: async (req, res) => {
            const order = getSingleOrder({ _id: mongoose.Types.ObjectId(req.params.id) })
            res.status(200).json(order)
        },

        // Get all orders
        getAllOrders: async (req, res) => {
            const orders = await getAllOrders()
            res.status(200).json(orders)
        },

        // Update single order by ID
        updateOrder: async (req, res) => {
            const validation = orderValidation(req.body)
            if (validation.error) return error().resourceError(res, validation.error?.message, 422)
            const updatedOrder = await updateOrder({ _id: mongoose.Types.ObjectId(req.params.id) }, req.body)
            res.status(200).json(updatedOrder)
        },

        // Delete single order by ID
        deleteOrder: async (req, res) => {
            const deletedOrder = await deleteOrder({ _id: mongoose.Types.ObjectId(req.params.id) })
            res.status(200).json(deletedOrder)
        }
    }
}

export { orderController }