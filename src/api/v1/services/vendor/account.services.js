import { Message } from "../../mongodb/chat";
import { Customer } from "../../mongodb/customer";
import { Vendor } from "../../mongodb/vendor";
import { getNestedProperty, globalErrorHandler } from "../../utils";

export const findVendorByIDAndUpdate = async (id, data, res) => {
    try {
        return await Vendor.findOneAndUpdate({_id : id}, data, { new: true });
    } catch (err) {
        console.log(err);
        globalErrorHandler(err, res);
    }
}

export const findVendorUsingIdAndToken = async (data, res) => {
    try {
        return await Vendor.findOne(data).select("is_active")
    } catch (err) {
        console.log(err);
        globalErrorHandler(err, res);
    }
}

export const getVendorSellerAccountInfo = async (data, res) => {
    try {
        return await Vendor.findOne(data).select('seller_account seller_id -_id')
    } catch (err) {
        console.log(err);
        globalErrorHandler(err, res);
    }
}

export const updateSellerAccountInfo = async (id, data, res) => {
    try {
        const temp = await getNestedProperty('seller_account', data);
        return await Vendor.findOneAndUpdate({ _id: id }, { $set: temp }, { new: true });
    } catch (err) {
        console.log(err);
        globalErrorHandler(err, res);
    }
}

export const getVendorBusinessInfo = async (data, res) => {
    try {
        return await Vendor.findOne(data).select('business_information -_id')
    } catch (err) {
        console.log(err);
        globalErrorHandler(err, res);
    }
}

export const updateVendorBusinessInfo = async (id, data, res) => {
    try {
        const temp = await getNestedProperty('business_information', data);
        return await Vendor.findOneAndUpdate({ _id: id }, { $set: temp }, { new: true });
    } catch (err) {
        console.log(err);
        globalErrorHandler(err, res);
    }
}

export const getVendorBankInfo = async (data, res) => {
    try {
        return await Vendor.findOne(data).select("bank_account -_id")
    } catch (err) {
        console.log(err);
        globalErrorHandler(err, res);
    }
}

export const updateVendorBankInfo = async (id, data, res) => {
    try {
        const temp = await getNestedProperty('bank_account', data);
        return await Vendor.findOneAndUpdate({ _id: id }, { $set: temp }, { new: true });
    } catch (err) {
        console.log(err);
        globalErrorHandler(err, res);
    }
}

export const getVendorWarehouseAddress = async (data, res) => {
    try {
        return await Vendor.findOne(data).select("warehouse_address -_id")
    } catch (err) {
        console.log(err);
        globalErrorHandler(err, res);
    }
}

export const updateVendorWarehouseAddress = async (id, data, res) => {
    try {
        const temp = await getNestedProperty('warehouse_address', data);
        return await Vendor.findOneAndUpdate({ _id: id }, { $set: temp }, { new: true });
    } catch (err) {
        console.log(err);
        globalErrorHandler(err, res);
    }
}

export const getVendorReturnAddress = async (data, res) => {
    try {
        return await Vendor.findOne(data).select("return_address -_id")
    } catch (err) {
        console.log(err);
        globalErrorHandler(err, res);
    }
}

export const updateVendorReturnAddress = async (id, data, res) => {
    try {
        const temp = await getNestedProperty('return_address', data);
        return await Vendor.findOneAndUpdate({ _id: id }, { $set: temp }, { new: true });
    } catch (err) {
        console.log(err);
        globalErrorHandler(err, res);
    }
}

export const getVendorAccountLogo = async (data, res) => {
    try {
        return await Vendor.findOne(data).select("logo -_id")
    } catch (err) {
        console.log(err);
        globalErrorHandler(err, res);
    }
}

export const updateVendorAccountLogo = async (query, data, res) => {
    try {
        return await Vendor.findOneAndUpdate(query, { $set : data }, { new: true });
    } catch (err) {
        console.log(err);
        globalErrorHandler(err, res);
    }
}

export const getVendorAccountPhoto = async (data, res) => {
    try {
        return await Vendor.findOne(data).select("image -_id")
    } catch (err) {
        console.log(err);
        globalErrorHandler(err, res);
    }
}

export const updateVendorAccountPhoto = async (query, data, res) => {
    try {
        return await Vendor.findOneAndUpdate(query, { $set : data }, { new: true });
    } catch (err) {
        console.log(err);
        globalErrorHandler(err, res);
    }
}

export const getVendorChats = async (query, res) => {
    try {
        const vendorChat = await Vendor.findOne(query).select("chat -_id")
        const chatList = vendorChat.chat || []
        const messages = await Message.find({});
        const customers = await Customer.find({})

        const populatedChatList = []

        for(const customerChat of chatList) {
            let populatedCustomerChat = {name: "Unknown", messages: []}
            for( const customer of customers) {
                if(String(customer._id) == String(customerChat.customer_id)){
                    populatedCustomerChat.name = customer.name
                }
            }
           
            const customerMessages = customerChat.messages;
            for(const customerMessage of customerMessages ) {
                for(const message of messages) {
                    if(String(customerMessage._id) == String(message._id)){
                        populatedCustomerChat.messages = [...populatedCustomerChat.messages, { sender: message.sender, message: message.message, createdAt: message.createdAt }]
                    }
                }
            }
            populatedChatList.push(populatedCustomerChat)
        }

        return populatedChatList
    } catch (err) {
        console.log(err)
        globalErrorHandler(err, res);
    }
}

export const getVendorChatWithSingleCustomer = async (query, id, res) => {
    try {
        const vendorChat = await Vendor.findOne(query).select("chat -_id")
        const chatList = vendorChat.chat || []
        const messages = await Message.find({});
        const customers = await Customer.find({})

        let populatedCustomerChat = {name: "Unknown", messages: []}

        for(const customerChat of chatList) {
            for( const customer of customers) {
                if(String(customer._id) == String(id)){
                    populatedCustomerChat.name = customer.name
                }
            }
           
            const customerMessages = customerChat.messages;
            for(const customerMessage of customerMessages ) {
                for(const message of messages) {
                    if(String(customerMessage._id) == String(message._id)){
                        populatedCustomerChat.messages = [...populatedCustomerChat.messages, { sender: message.sender, message: message.message, createdAt: message.createdAt }]
                    }
                }
            }
        }

        return populatedCustomerChat
    } catch (err) {
        console.log(err)
        globalErrorHandler(err, res);
    }
}
