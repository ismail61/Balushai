import { Category } from "../../mongodb/admin/models"

// Create category service
export const createCategory = async (data) => {
    try {
        return await new Category(data).save()
    } catch (error) {
        console.log(error)
    }
}

// Get single category service
export const getSingleCategory = async (query) => {
    try {
        return await Category.findOne(query)
    } catch (error) {
        console.log(error)
    }
}

// Get all category service
export const getAllCategory = async () => {
    try {
        return await Category.find({})
    } catch (error) {
        console.log(error)
    }
}