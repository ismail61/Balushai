import { createFreeShipping, deleteFreeShipping, getAllFreeShippings, getSingleFreeShipping, updateFreeShipping } from "../../../services/vendor";
import { error } from '../../../utils';
import { freeShippingValidation } from '../../../validations';

function freeShippingController() {
    return {

        // Create an freeShipping
        createFreeShipping: async (req, res) => {
            const validation = freeShippingValidation(req.body)
            if (validation.error) return error().resourceError(res, validation.error?.details[0].message, 422)

            const addedfreeShipping = await createFreeShipping(req.body)
            res.status(200).json(addedfreeShipping);
        },

        // Find single product by ID 
        getSingleFreeShipping: async (req, res) => {
            const freeShipping = getSingleFreeShipping({ _id: mongoose.Types.ObjectId(req.params.id) })
            res.status(200).json(freeShipping)
        },

        // Get all freeShippings
        getAllFreeShippings: async (req, res) => {
            const freeShippings = await getAllFreeShippings()
            res.status(200).json(freeShippings)
        },

        // Update single freeShipping by ID
        updateFreeShipping: async (req, res) => {
            const validation = freeShippingValidation(req.body)
            if (validation.error) return error().resourceError(res, validation.error?.message, 422)
            const updatedfreeShipping = await updateFreeShipping({ _id: mongoose.Types.ObjectId(req.params.id) }, req.body)
            res.status(200).json(updatedfreeShipping)
        },

        // Delete single freeShipping by ID
        deleteFreeShipping: async (req, res) => {
            const deletedfreeShipping = await deleteFreeShipping({ _id: mongoose.Types.ObjectId(req.params.id) })
            res.status(200).json(deletedfreeShipping)
        }
    }
}
export { freeShippingController };