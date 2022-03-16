import { Brand } from "../../mongodb/admin";
import { globalErrorHandler as globalErrorHandler } from "../../utils";

export const createBrand = async (data, res) => {
    try {
        const newBrand = await new Brand(data);
        return newBrand.save();
    } catch (err) {
        console.log(err)
        globalErrorHandler(err, res);
    }
}

export const getAllBrands = async (res) => {
    try {
        return await Brand.find({});
    } catch (err) {
        console.log(err)
        globalErrorHandler(err, res);
    }
}

export const updateBrand = async (query, data, res) => {
    try {
        return await Brand.updateOne(query, data)
    } catch (err) {
        console.log(err)
        globalErrorHandler(err, res);
    }
}

export const deleteBrand = async (query, res) => {
    try {
        return await Brand.deleteOne(query)
    } catch (err) {
        console.log(err)
        globalErrorHandler(err, res);
    }
}