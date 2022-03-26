import { Brand } from "../../mongodb/admin";
export const createBrand = async (data) => {
    try {
        const newBrand = await new Brand(data);
        return newBrand.save();
    } catch (err) {
        console.log(err);
    }
}

export const getAllBrands = async () => {
    try {
        return await Brand.find({});
    } catch (err) {
        console.log(err)
    }
}

export const getBrand = async (query) => {
    try {
        return await Brand.findOne(query);
    } catch (err) {
        console.log(err)
    }
}


export const deleteBrand = async (query) => {
    try {
        return await Brand.deleteOne(query)
    } catch (err) {
        console.log(err)
    }
}