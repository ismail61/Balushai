import { Message } from "../../mongodb/chat";
import { Customer } from "../../mongodb/customer";
import { Vendor } from "../../mongodb/vendor";
import { globalErrorHandler } from "../../utils";

export const findCustomerUsingIdAndToken = async (data, res) => {
    try {
        return await Customer.findOne(data)
    } catch (err) {
        console.log(err);
        globalErrorHandler(err, res);
    }
}

export const getCustomerAccountInfo = async (data, res) => {
    try {
        return await Customer.findOne(data).select('-token -_id');
    } catch (err) {
        console.log(err);
        globalErrorHandler(err, res);
    }
}

export const updateCustomerAccountInfo = async (query, data, res) => {
    try {
        return await Customer.findOneAndUpdate(query, { $set: data }, { new: true }).select('name phone');
    } catch (err) {
        console.log(err);
        globalErrorHandler(err, res);
    }
}

export const getCustomerAccountPhoto = async (data, res) => {
    try {
        return await Customer.findOne(data).select("image -_id")
    } catch (err) {
        console.log(err);
        globalErrorHandler(err, res);
    }
}

export const updateCustomerAccountPhoto = async (query, url, res) => {
    try {
        return await Customer.findOneAndUpdate(query, { $set: data }, { new: true }).select('image');
    } catch (err) {
        console.log(err);
        globalErrorHandler(err, res);
    }
}

export const getCustomerChatWithSingleVendor = async (query, id, res) => {
    try {
        console.log(query)
        const customerChat = await Customer.findOne(query)
        const chatList = customerChat?.chat || []
        console.log(customerChat + "=============>")
        const messages = await Message.find({});
        const vendors = await Vendor.find({})

        let populatedVendorChat = {name: "Unknown", messages: []}

        for(const vendorChat of chatList) {
            for( const vendor of vendors) {
                if(String(vendor._id) == String(id)){
                    populatedVendorChat.name = vendor.shop_name
                }
            }
           
            const vendorMessages = vendorChat.messages;
            for(const vendorMessage of vendorMessages ) {
                for(const message of messages) {
                    if(String(vendorMessage._id) == String(message._id)){
                        populatedVendorChat.messages = [...populatedVendorChat.messages, { sender: message.sender, message: message.message, createdAt: message.createdAt }]
                    }
                }
            }
        }

        return populatedVendorChat
    } catch (err) {
        console.log(err)
        globalErrorHandler(err, res);
    }
}