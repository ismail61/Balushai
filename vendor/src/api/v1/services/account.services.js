import { Vendor } from "../mongodb/models";

export const findVendorByIDAndUpdate = async (id, data) => {
    try {
        return await Vendor.findOneAndUpdate(id, data, { new: true });
    } catch (err) {
        console.log(err);
    }
}

export const getVendorBusinessInfo = async (data) => {
    try {
        return await Vendor.findOne(data)
    } catch (err) {
        console.log(err);
    }
}

export const findVendorUsingIdAndToken = async (data) => {
    try {
        return await Vendor.findOne(data).select("activated")
    } catch (err) {
        console.log(err);
    }
}
