import { Product } from "../../mongodb/vendor"

export const getActivatedAndApprovedProducts = async (query) => {
    try {
        return await Product.find(query)
    } catch (err) {
        console.log(err);
    }
}

export const getSingleProduct = async (query) => {
    try {
        return await Product.findOne(query);
    } catch (err) {
        console.log(err);
    }
}