import {
    createFreeShipping,
    deleteFreeShipping,
    getAllFreeShippings,
    getDynamicFreeShippings,
    getSingleFreeShipping,
    updateFreeShipping,
} from "../../../services/vendor";
import { error } from "../../../utils";
import { freeShippingValidation } from "../../../validations";

function freeShippingController() {
    return {
        // Create an freeShipping
        createFreeShipping: async (req, res) => {
            const validation = freeShippingValidation(req.body);
            if (validation.error)
                return error().resourceError(
                    res,
                    validation.error?.details[0].message,
                    422
                );

            const addedFreeShipping = await createFreeShipping(
                req.body,
                req.user?._id
            );
            res.status(200).json(addedFreeShipping);
        },

        // Find single product by ID
        getSingleFreeShipping: async (req, res) => {
            const freeShipping = getSingleFreeShipping({ _id: req.params.id });
            if (!freeShipping)
                return error().resourceError(
                    res,
                    "Sorry! This Free Shipping Voucher doest not exists or something wrong",
                    422
                );
            res.status(200).json(freeShipping);
        },

        // Get all freeShippings
        getAllFreeShippings: async (req, res) => {
            const freeShippings = await getAllFreeShippings({ _id: req.user?._id });
            res.status(200).json(freeShippings);
        },

        // Get all Active freeShippings
        getAllActiveFreeShippings: async (req, res) => {
            const freeShippings = await getDynamicFreeShippings(
                { _id: req.user?._id },
                true
            );
            res.status(200).json(freeShippings);
        },

        // Get all DeActive freeShippings
        getAllDeActiveFreeShippings: async (req, res) => {
            const freeShippings = await getDynamicFreeShippings(
                { _id: req.user?._id },
                false
            );
            res.status(200).json(freeShippings);
        },

        // Update single freeShipping by ID
        updateFreeShipping: async (req, res) => {
            const validation = freeShippingValidation(req.body);
            if (validation.error)
                return error().resourceError(res, validation.error?.message, 422);
            const updatedFreeShipping = await updateFreeShipping(
                { _id: req.params?.id },
                req.body
            );
            if (!updatedFreeShipping)
                return error().resourceError(
                    res,
                    "Sorry! This Free Shipping Voucher doest not exists or something wrong",
                    422
                );
            res.status(200).json(updatedFreeShipping);
        },

        // Delete single freeShipping by ID
        deleteFreeShipping: async (req, res) => {
            const deletedFreeShipping = await deleteFreeShipping({
                _id: req.params?.id,
            });
            if (!deletedFreeShipping)
                return error().resourceError(
                    res,
                    "Sorry! This Free Shipping Voucher doest not exists or something wrong",
                    422
                );
            res.status(200).json(deletedFreeShipping);
        },

        // Active single Free Shipping by ID
        activeFreeShipping: async (req, res) => {
            const updatedFreeShipping = await updateFreeShipping(
                { _id: req.params?.id },
                { is_active: true }
            );
            if (!updatedFreeShipping)
                return error().resourceError(
                    res,
                    "Sorry! This Free Shipping doest not exists or something wrong",
                    422
                );
            res.status(200).json(updatedFreeShipping);
        },

        // De Active single Free Shipping by ID
        deActiveFreeShipping: async (req, res) => {
            const updatedFreeShipping = await updateFreeShipping(
                { _id: req.params?.id },
                { is_active: false }
            );
            if (!updatedFreeShipping)
                return error().resourceError(
                    res,
                    "Sorry! This Free Shipping doest not exists or something wrong",
                    422
                );
            res.status(200).json(updatedFreeShipping);
        },
    };
}
export { freeShippingController };
