import { Customer } from "../../mongodb/customer";
import { Vendor } from "../../mongodb/vendor"
import { globalErrorHandler } from "../../utils"

export const getAllVendors = async(res) => {
    try {
        const allVendors = await Vendor.find({});
        const vendorList = []

        for(let vendor of allVendors) {
            const newVendor = {
                _id:vendor._id,
                shop_name: vendor?.seller_account?.shop_name
            }
            vendorList.push(newVendor)
        }
        return vendorList
    } catch (err) {
        console.log(err)
        globalErrorHandler(err, res)
    }
}

export const getAllCustomers = async(res) => {
    try {
        const allCustomers = await Customer.find({});
        const customerList = []

        for(let customer of allCustomers) {
            const newCustomer = {
                _id:customer._id,
                name: customer?.name
            }
            customerList.push(newCustomer)
        }
        return customerList
    } catch (err) {
        console.log(err)
        globalErrorHandler(err, res)
    }
}