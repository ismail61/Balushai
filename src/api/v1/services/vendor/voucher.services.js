import { Voucher } from "../../mongodb/common";
import { Vendor } from "../../mongodb/vendor";
import { globalErrorHandler } from "../../utils";

export const createVoucher = async (data, vendor_id, res) => {
    try {
        const newVoucher = await new Voucher(data);
        const savedVoucher = await newVoucher.save();
        await Vendor.findOneAndUpdate(
            { _id: vendor_id },
            {
                $push: {
                    vouchers: savedVoucher?._id,
                },
            },
            { new: true }
        );
        return savedVoucher;
    } catch (err) {
        console.log(err);
        globalErrorHandler(err, res);
    }
};

export const getSingleVoucher = async (query) => {
    try {
        return await Voucher.findOne(query);
    } catch (err) {
        console.log(err);
    }
};

export const getAllVouchers = async (query) => {
    try {
        return await Vendor.findOne(query)
            .select("vouchers -_id")
            .populate("vouchers")
            .exec();
    } catch (err) {
        console.log(err);
    }
};

export const getDynamicVoucher = async (query, status) => {
    try {
        return await Vendor.findOne(query)
            .select("vouchers -_id")
            .populate({
                path: "vouchers",
                match: { is_active: status },
            })
            .exec();
    } catch (err) {
        console.log(err);
    }
};

export const updateVoucher = async (query, data) => {
    try {
        return await Voucher.findOneAndUpdate(query, { $set: data });
    } catch (err) {
        console.log(err);
    }
};
