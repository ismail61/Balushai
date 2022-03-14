import { createBrand, deleteBrand, getAllBrands, updateBrand } from "../../services/admin"
import { brandValidation } from "../../validations/admin"
import { error } from "../../utils"

const brandController = () => {
    return {

        // Create a brand
        createBrand: async (req, res) => {
            const validation = brandValidation(req.body)
            if (validation.error) return error().resourceError(res, validation.error?.details[0].message, 422)

            const addedBrand = await createBrand(validation)
            res.status(200).json(addedBrand);
        },

        // Get all brands
        getAllBrands: async (req, res) => {
            const brands = await getAllBrands()
            res.status(200).json(brands)
        },

        // Update a brand
        updateBrand: async (req, res ) => {
            const validation = await brandValidation(req.body);
            if (validation.error) return error().resourceError(res, validation.error?.details[0].message, 422)

            const updatedBrand = await updateBrand({ _id: mongoose.Types.ObjectId(req.params.id) }, req.body)
            res.status(200).json(updatedBrand)
        },

        // Delete a brand
        deleteBrand: async (req, res) => {
            const deletedBrand = await deleteBrand({ _id: mongoose.Types.ObjectId(req.params.id) })
            res.status(200).json(deleteBrand)
        }
    }
}

export { brandController }