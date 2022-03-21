import { Message } from "../../mongodb/chat";
import { Customer } from "../../mongodb/customer";
import { Vendor } from "../../mongodb/vendor";
import { globalErrorHandler } from "../../utils";

export const sendMessage = async (data, res) => {
    try {
        const sentMessage = await new Message(data).save()

        // Save to vendor
        const vendor = await Vendor.findOne({ _id: sentMessage.vendor_id })
        let customersOfVendor = vendor.chat
        if( !customersOfVendor || !customersOfVendor.length > 0) {
            customersOfVendor = [{
                customer_id: sentMessage.customer_id,
                messages: [{
                    _id: sentMessage._id
                }]
            }]
        } else {
            for( const customer of customersOfVendor ) {
                if(String(customer.customer_id) == String(sentMessage.customer_id)){
                    customer.messages = [...customer.messages, {_id: sentMessage._id}]
                }
            }
        }

        await Vendor.findOneAndUpdate(
            {_id: sentMessage.vendor_id},
            { 
                chat: customersOfVendor
            }
        )

        // Save to customer
        const customer = await Customer.findOne({ _id: sentMessage.customer_id })
        let vendorsOfCustomer = customer.chat
        if( !vendorsOfCustomer || !vendorsOfCustomer.length > 0) {
            vendorsOfCustomer = [{
                vendor_id: sentMessage.vendor_id,
                messages: [{
                    _id: sentMessage._id
                }]
            }]
        } else {
            for( const vendor of vendorsOfCustomer ) {
                if(String(vendor.vendor_id) == String(sentMessage.vendor_id)){
                    vendor.messages = [...vendor.messages, {_id: sentMessage._id}]
                }
            }
        } 

        const updatedCustomer = await Customer.findOneAndUpdate(
            {_id: sentMessage.customer_id},
            { 
                chat: vendorsOfCustomer
            }
        )

        console.log(updatedCustomer)
        

        return sentMessage;
    } catch (err) {
        // globalErrorHandler(err, res);
        console.log(err)
    }
}