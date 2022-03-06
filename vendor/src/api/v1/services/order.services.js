import { Order } from "../mongodb/models"

export const createOrder = async (data) => {
    try {
        const newOrder = await new Order(data)
        return await newOrder.save()
    } catch (err) {
        console.log(err)
    }
}

export const getSingleOrder = async (query) => {
    try {
        return await Order.findOne(query)
    } catch (err) {
        console.log(err)
    }
}

export const getAllOrders = async () => {
    try {
        return await Order.find({})
    } catch (err) {
        console.log(err)
    }
}

export const updateOrder = async (query, data) => {
    try {
        return await Order.updateOne(query, { $set: data})
    } catch (err) {
        console.log(err)
    }
}

export const deleteOrder = async (query) => {
    try {
        return await Order.deleteOne(query)
    } catch (err) {
        console.log(err)
    }
}