import { Product } from "../mongodb/models";

export const addProduct = async (data) => {
    try {
        const newProduct = await new Product(data);
        return await newProduct.save()
    } catch (err) {
        console.log(err);
    }
}

export const findProduct = async (query) => {
    try {
        return await Product.findOne(query)
    } catch (err) {
        console.log(err);
    }
}

export const getProducts = async () => {
    try {
        return await Product.find({})
    } catch (err) {
        console.log(err)
    }
}

export const updateProduct = async (query, data) => {
    try {
        return await Product.updateOne(query, { $set: data })
    } catch (err) {
        console.log(err)
    }
}

export const deleteProduct = async (query) => {
    try {
        return await Product.deleteOne(query)
    } catch (err) {
        console.log(err)
    }
}