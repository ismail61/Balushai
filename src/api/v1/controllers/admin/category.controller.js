import mongoose from "mongoose"
import { createCategory, getAllCategory, getSingleCategory } from "../../services/admin"
import { error } from "../../utils"
import { categoryValidation } from "../../validations/admin"

const categoryController = () => {
    return {

        // create a category
        createCategory: async (req, res) => {

            // Checek validation
            const validation = categoryValidation(req.body)
            if (validation.error) return error().resourceError(res, validation.error?.details[0].message, 422)

            // save to db
            const savedCategory = await createCategory(req.body)
            res.status(200).json(savedCategory)
        },

        // Find single category by ID 
        getSingleCategory: async (req, res) => {
            
            // Get single category from db
            const category = await getSingleCategory({_id: mongoose.Types.ObjectId(req.params.id)})
            res.status(200).json(category)
        },

        // Get all category
        getAllCategory: async (req, res) => {
            
            // Get all category form db
            const categories = await getAllCategory()
            res.status(200).json(categories)
        },
    }
}

export { categoryController }