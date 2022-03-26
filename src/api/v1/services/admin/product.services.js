import { Product } from "../../mongodb/vendor"

export const getProducts = async (query) => {
    try {
        return await Product.find(query);
    } catch (err) {
        console.log(err)
    }
}

export const getProduct = async (query) => {
    try {
        return await Product.findOne(query);
    } catch (err) {
        console.log(err);
    }
}

export const updateProduct = async (query, data) => {
    try {
        return await Product.findOneAndUpdate(query, { $set: data }, { new: true })
    } catch (err) {
        console.log(err);
    }
}

export const getDynamicStatusProducts = async (status) => {
    try {
        return await Product.find({
            status
        })
    } catch (err) {
        console.log(err)
    }
}
