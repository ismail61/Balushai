import { Order } from "../../mongodb/common"
import { Customer } from '../../mongodb/customer'
import { Vendor } from "../../mongodb/vendor"
import { globalErrorHandler } from "../../utils"

export const createCustomerOrder = async (user_id, vendor_id, data, res) => {
    try {
        const newOrder = await new Order(data)
        const savedOrder = await newOrder.save()
        await pushCustomerOrders(user_id, newOrder._id);
        await pushVendorOrders(vendor_id,newOrder._id);
        return savedOrder;
    } catch (err) {
        console.log(err)
        globalErrorHandler(err, res);
    }
}


const pushCustomerOrders = async (user_id, order_id, res) => {
    try {
        // console.log('customer_id :' + user_id + 'order_id : ' + order_id);
        let ordersArray = await Customer.findOne({ _id: user_id }).select('orders -_id') || [];
        const { orders } = ordersArray;
        orders?.push({ _id: order_id });
        await Customer.findOneAndUpdate({ _id: user_id }, { orders });
    } catch (err) {
        console.log(err)
        globalErrorHandler(err, res);
    }
}

const pushVendorOrders = async (user_id, order_id, res) => {
    try {
        // console.log('customer_id :' + user_id + 'order_id : ' + order_id);
        let ordersArray = await Vendor.findOne({ _id: user_id }).select('orders -_id') || [];
        const { orders } = ordersArray;
        orders?.push({ _id: order_id });
        await Vendor.findOneAndUpdate({ _id: user_id }, { orders });
    } catch (err) {
        console.log(err)
        globalErrorHandler(err, res);
    }
}

export const getSingleOrder = async (query, res) => {
    try {
        return await Order.findOne(query)
    } catch (err) {
        console.log(err)
        globalErrorHandler(err, res);
    }
}

export const getAllOrders = async (data, res) => {
    try {
        return await Order.find(data)
    } catch (err) {
        console.log(err)
        globalErrorHandler(err, res);
    }
}

export const updateOrder = async (query, data, res) => {
    try {
        return await Order.findOneAndUpdate(query, data, { new: true })
    } catch (err) {
        console.log(err)
        globalErrorHandler(err, res);
    }
}
