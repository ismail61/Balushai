import { Customer } from "../../mongodb/customer";
import { globalErrorHandler } from "../../utils";

export const findCustomerUsingIdAndToken = async (data) => {
    try {
        return await Customer.findOne(data)
    } catch (err) {
        console.log(err);
    }
}

export const getCustomerAccountInfo = async (data) => {
    try {
        return await Customer.findOne(data).select('-token -_id');
    } catch (err) {
        console.log(err);
    }
}

export const updateCustomerAccountInfo = async (query, data , res) => {
    try {
        return await Customer.findOneAndUpdate(query, { $set: data }, { new: true }).select('name phone');
    } catch (err) {
        console.log(err);
        globalErrorHandler(err, res);
    }
}

export const getCustomerAccountPhoto = async (data) => {
    try {
        return await Customer.findOne(data).select("image -_id")
    } catch (err) {
        console.log(err);
    }
}

export const updateCustomerAccountPhoto = async (query, url) => {
    try {
        return await Customer.findOneAndUpdate(query, { $set: data }, { new: true }).select('image');
    } catch (err) {
        console.log(err);
    }
}
