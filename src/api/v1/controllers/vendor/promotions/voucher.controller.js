import { createVoucher, deleteVoucher, getAllVouchers, getSingleVoucher, updateVoucher } from "../../../services/vendor";
import { error } from '../../../utils';
import { voucherValidation } from "../../../validations";



function voucherController() {
    return {

        // Create an Voucher
        createVoucher: async (req, res) => {
            const validation = voucherValidation(req.body)
            if (validation.error) return error().resourceError(res, validation.error?.details[0].message, 422)

            const addedVoucher = await createVoucher(req.body)
            res.status(200).json(addedVoucher);
        },

        // Find single product by ID 
        getSingleVoucher: async (req, res) => {
            const Voucher = getSingleVoucher({ _id: mongoose.Types.ObjectId(req.params.id) })
            res.status(200).json(Voucher)
        },

        // Get all Vouchers
        getAllVouchers: async (req, res) => {
            const Vouchers = await getAllVouchers()
            res.status(200).json(Vouchers)
        },

        // Update single Voucher by ID
        updateVoucher: async (req, res) => {
            const validation = VoucherValidation(req.body)
            if (validation.error) return error().resourceError(res, validation.error?.message, 422)
            const updatedVoucher = await updateVoucher({ _id: mongoose.Types.ObjectId(req.params.id) }, req.body)
            res.status(200).json(updatedVoucher)
        },

        // Delete single Voucher by ID
        deleteVoucher: async (req, res) => {
            const deletedVoucher = await deleteVoucher({ _id: mongoose.Types.ObjectId(req.params.id) })
            res.status(200).json(deletedVoucher)
        }
    }
}
export { voucherController };