import {
    createVoucher,
    getAllVouchers,
    getDynamicVoucher,
    getSingleVoucher,
    updateVoucher,
} from "../../../services/vendor";
import { error } from "../../../utils";
import { voucherValidation } from "../../../validations";

function voucherController() {
    return {
        // Create a new Voucher
        createVoucher: async (req, res) => {
            const validation = voucherValidation(req.body);
            if (validation.error)
                return error().resourceError(
                    res,
                    validation.error?.details[0].message,
                    422
                );

            const addedVoucher = await createVoucher(req.body, req.user?._id, res);
            res.status(200).json(addedVoucher);
        },

        // Find single voucher by ID
        getSingleVoucher: async (req, res) => {
            const voucher = getSingleVoucher({ _id: req.params?._id });
            if (!voucher) return error().resourceError(res, 'Sorry! This Voucher doest not exists or something wrong', 422);
            res.status(200).json(voucher);
        },

        // Get all Active Vouchers
        getAllActiveVouchers: async (req, res) => {
            const Vouchers = await getDynamicVoucher({ _id: req.user?._id }, true);
            res.status(200).json(Vouchers);
        },

        // Get all DeActive Vouchers
        getAllDeActiveVouchers: async (req, res) => {
            const Vouchers = await getDynamicVoucher({ _id: req.user?._id }, false);
            res.status(200).json(Vouchers);
        },
        // Get all Vouchers
        getAllVouchers: async (req, res) => {
            const Vouchers = await getAllVouchers({ _id: req.user?._id });
            res.status(200).json(Vouchers);
        },

        // Update single Voucher by ID
        updateVoucher: async (req, res) => {

            const validation = voucherValidation(req.body);
            if (validation.error) return error().resourceError(res, validation.error?.message, 422);

            const updatedVoucher = await updateVoucher(
                { _id: req.params?.id },
                req.body
            );
            if (!updatedVoucher) return error().resourceError(res, 'Sorry! This Voucher doest not exists or something wrong', 422);
            res.status(200).json(updatedVoucher);
        },

        // Active single Voucher by ID
        activeVoucher: async (req, res) => {
            const updatedVoucher = await updateVoucher(
                { _id: req.params?.id },
                { is_active: true }
            );
            if (!updatedVoucher) return error().resourceError(res, 'Sorry! This Voucher doest not exists or something wrong', 422);
            res.status(200).json(updatedVoucher);
        },

        // De Active single Voucher by ID
        deActiveVoucher: async (req, res) => {
            const updatedVoucher = await updateVoucher(
                { _id: req.params?.id },
                { is_active: false }
            );
            if (!updatedVoucher) return error().resourceError(res, 'Sorry! This Voucher doest not exists or something wrong', 422);
            res.status(200).json(updatedVoucher);
        },
    };
}

export { voucherController };
