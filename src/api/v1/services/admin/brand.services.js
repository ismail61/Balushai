import { Brand } from "../../mongodb/admin/models"

export const createBrand = async (data) => {
    try {
        const newBrand = await new Brand(data);
        return newBrand.save();
    } catch (error) {
        console.log(error);
    }
}

export const getAllBrands = async () => {
    try {
        return await Brand.find({});
    } catch (error) {
        console.log(error)
    }
}

export const updateBrand = async (query, data) => {
    try {
        return await Brand.updateOne(query, data)
    } catch (error) {
        console.log(error)
    }
}

export const deleteBrand = async (query) => {
    try {
        return await Brand.deleteOne(query)
    } catch (error) {
        console.log(error)
    }
}