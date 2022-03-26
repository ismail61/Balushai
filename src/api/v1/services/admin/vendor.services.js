import { Vendor } from "../../mongodb/vendor";

export const getVendors = async (query) => {
    try {
        return await Vendor.find(query);
    } catch (err) {
        console.log(err);
    }
};

export const getVendor = async (query) => {
    try {
        return await Vendor.findOne(query);
    } catch (err) {
        console.log(err);
    }
};

export const updateVendor = async (query, data) => {
    try {
        return await Vendor.findOneAndUpdate(query, { $set: data }, { new: true });
    } catch (err) {
        console.log(err);
    }
};

export const getAllPendingVendors = async (status) => {
    try {
        return await Product.find({
            status,
        });
    } catch (err) {
        console.log(err);
    }
};
