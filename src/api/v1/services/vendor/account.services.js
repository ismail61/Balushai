import { Vendor } from "../../mongodb/vendor";
import { getNestedProperty } from "../../utils";

export const findVendorByIDAndUpdate = async (id, data) => {
    try {
        return await Vendor.findOneAndUpdate({_id : id}, data, { new: true });
    } catch (err) {
        console.log(err);
    }
}

export const findVendorUsingIdAndToken = async (data) => {
    try {
        return await Vendor.findOne(data).select("is_active")
    } catch (err) {
        console.log(err);
    }
}

export const getVendorSellerAccountInfo = async (data) => {
    try {
        return await Vendor.findOne(data).select('seller_account seller_id -_id')
    } catch (err) {
        console.log(err);
    }
}

export const updateSellerAccountInfo = async (id, data) => {
    try {
        const temp = await getNestedProperty('seller_account', data);
        return await Vendor.findOneAndUpdate({ _id: id }, { $set: temp }, { new: true });
    } catch (err) {
        console.log(err);
    }
}

export const getVendorBusinessInfo = async (data) => {
    try {
        return await Vendor.findOne(data).select('business_information -_id')
    } catch (err) {
        console.log(err);
    }
}

export const updateVendorBusinessInfo = async (id, data) => {
    try {
        const temp = await getNestedProperty('business_information', data);
        return await Vendor.findOneAndUpdate({ _id: id }, { $set: temp }, { new: true });
    } catch (err) {
        console.log(err);
    }
}

export const getVendorBankInfo = async (data) => {
    try {
        return await Vendor.findOne(data).select("bank_account -_id")
    } catch (err) {
        console.log(err);
    }
}

export const updateVendorBankInfo = async (id, data) => {
    try {
        const temp = await getNestedProperty('bank_account', data);
        return await Vendor.findOneAndUpdate({ _id: id }, { $set: temp }, { new: true });
    } catch (err) {
        console.log(err);
    }
}

export const getVendorWarehouseAddress = async (data) => {
    try {
        return await Vendor.findOne(data).select("warehouse_address -_id")
    } catch (err) {
        console.log(err);
    }
}

export const updateVendorWarehouseAddress = async (id, data) => {
    try {
        const temp = await getNestedProperty('warehouse_address', data);
        return await Vendor.findOneAndUpdate({ _id: id }, { $set: temp }, { new: true });
    } catch (err) {
        console.log(err);
    }
}

export const getVendorReturnAddress = async (data) => {
    try {
        return await Vendor.findOne(data).select("return_address -_id")
    } catch (err) {
        console.log(err);
    }
}

export const updateVendorReturnAddress = async (id, data) => {
    try {
        const temp = await getNestedProperty('return_address', data);
        return await Vendor.findOneAndUpdate({ _id: id }, { $set: temp }, { new: true });
    } catch (err) {
        console.log(err);
    }
}

export const getVendorAccountLogo = async (data) => {
    try {
        return await Vendor.findOne(data).select("logo -_id")
    } catch (err) {
        console.log(err);
    }
}

export const updateVendorAccountLogo = async (query, data) => {
    try {
        return await Vendor.findOneAndUpdate(query, { $set : data }, { new: true });
    } catch (err) {
        console.log(err);
    }
}

export const getVendorAccountPhoto = async (data) => {
    try {
        return await Vendor.findOne(data).select("image -_id")
    } catch (err) {
        console.log(err);
    }
}

export const updateVendorAccountPhoto = async (query, data) => {
    try {
        return await Vendor.findOneAndUpdate(query, { $set : data }, { new: true });
    } catch (err) {
        console.log(err);
    }
}