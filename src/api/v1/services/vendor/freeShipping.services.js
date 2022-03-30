import { FreeShipment, Vendor } from "../../mongodb/vendor";

export const createFreeShipping = async (data, vendor_id) => {
    try {
        const newFreeShipping = await new FreeShipment(data);
        const savedNewFreeShipping = await newFreeShipping.save();
        await Vendor.findOneAndUpdate(
            { _id: vendor_id },
            {
                $push: {
                    vouchers: savedVoucher?._id,
                },
            },
            { new: true }
        );
        return savedNewFreeShipping;
    } catch (err) {
        console.log(err);
    }
};

export const getSingleFreeShipping = async (query) => {
    try {
        return await FreeShipment.findOne(query);
    } catch (err) {
        console.log(err);
    }
};

export const getAllFreeShippings = async (query) => {
    try {
        return await Vendor.findOne(query)
            .select("free_shipments -_id")
            .populate("free_shipments")
            .exec();
    } catch (err) {
        console.log(err);
    }
};

export const getDynamicFreeShippings = async (query, status) => {
    try {
        return await Vendor.findOne(query)
            .select("free_shipments -_id")
            .populate({
                path: "free_shipments",
                match: { is_active: status },
            })
            .exec();
    } catch (err) {
        console.log(err);
    }
};
export const updateFreeShipping = async (query, data) => {
    try {
        return await FreeShipment.findOneAndUpdate(
            query,
            { $set: data },
            { new: true }
        );
    } catch (err) {
        console.log(err);
    }
};

export const deleteFreeShipping = async (query) => {
    try {
        return await FreeShipment.findOneAndDelete(query);
    } catch (err) {
        console.log(err);
    }
};
