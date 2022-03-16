import slugify from "slugify";
import { createCategory, getAllCategory, getSingleCategory } from "../../services/admin";
import { error } from "../../utils";
import { categoryValidation } from "../../validations";

const brandController = () => {
    return {


        // Create a brand
        createBrand: async (req, res) => {
            const validation = brandValidation(req.body)
            if (validation.error) return error().resourceError(res, validation.error?.details[0].message, 422)

            const { name } = req.body;
            const slug = slugify(name);

            const addedBrand = await createBrand({
                ...req.body,
                slug
            }, res)
            res.status(200).json(addedBrand);
        },

        // Get all brands
        getAllBrands: async (req, res) => {
            const brands = await getAllBrands(res)
            res.status(200).json(brands)
        },

        // Update a brand
        updateBrand: async (req, res ) => {
            const validation = await brandValidation(req.body);
            if (validation.error) return error().resourceError(res, validation.error?.details[0].message, 422)

            const updatedBrand = await updateBrand({ _id: mongoose.Types.ObjectId(req.params.id) }, req.body, res)
            res.status(200).json(updatedBrand)
        },

        // Delete a brand
        deleteBrand: async (req, res) => {
            const deletedBrand = await deleteBrand({ _id: mongoose.Types.ObjectId(req.params.id) }, res)
            res.status(200).json(deletedBrand)
        }

     
    }
}

export { brandController }