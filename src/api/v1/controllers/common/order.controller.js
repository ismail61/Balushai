import mongoose from "mongoose"
import { getAllOrders, getSingleOrder, updateOrder ,createCustomerOrder } from "../../services/common/"
import { error } from "../../utils"
import { orderValidation } from "../../validations"

const orderController = () => {
    return {

        // create an order
        createOrder: async (req, res) => {

            const validation = orderValidation(req.body);
            //console.log(validation.error)
            if (validation.error) return error().resourceError(res, validation.error?.details[0].message, 422);

            const {
                product,
                shipment_fee,
                seller_discount,
                payment_information,
            } = req.body;

            const { quantity, price, vendor_id } = product;
            const total_price = parseInt(quantity) * parseInt(price);
            const discount = seller_discount || 0;
            const grand_total = total_price - (parseInt(shipment_fee) + parseInt(discount));

            const { method  } = payment_information;

            (method !== 'COD') ?  payment_information.status = 'PAID' : payment_information.status = 'UNPAID';
            //if failed bkash payment method then status will be FAILED

            const FIVE_DAYS = 5*24*60*60*1000;

            const createdOrder = await createCustomerOrder(req.user?._id, vendor_id ,{
                ...req.body,
                total_price,
                grand_total,
                payment_information,
                estimate_delivery_time: new Date(new Date().getTime()+(FIVE_DAYS)),
                user_id: req.user?._id
            });
            res.status(200).json(createdOrder);
        },

        // Find single product by ID 
        getCustomerSingleOrder: async (req, res) => {
            //if(typeof req.params?.id !== mongoose.Types.ObjectId) return error().resourceError(res, 'Invalid Params Id', 422);
            const order = await getSingleOrder({ $and: [{ _id: mongoose.Types.ObjectId(req.params?.id) }, { user_id: req.user?._id }] });
            if (!order) return error().resourceError(res, 'Sorry! This Order doest not exists or something wrong', 422);
            res.status(200).json(order)
        },

        // Get all orders
        getCustomerAllOrders: async (req, res) => {
            const orders = await getAllOrders({ user_id: req.user?._id })
            res.status(200).json(orders)
        },

        // Cancel single order by ID
        cancelOrder: async (req, res) => {

            const order = await getSingleOrder({ _id: mongoose.Types.ObjectId(req.params.id), user_id: req.user?._id })
            if (!order) return error().resourceError(res, 'Sorry! This Order doest not exists or something wrong', 422);

            if (order.status !== 'PENDING') return error().resourceError(res, 'Sorry! You can not cancel this order right now', 422);

            const deletedOrder = await updateOrder({ _id: mongoose.Types.ObjectId(req.params.id) }, { status: 'CANCELED' })
            if (!deletedOrder) return error().resourceError(res, 'Sorry! This Order doest not exists or something wrong', 422);

            res.status(200).json(deletedOrder);
        }
    }
}

export { orderController }