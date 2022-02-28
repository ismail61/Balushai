import mongoose from 'mongoose';
import { addProduct, findProduct, getProducts, updateProduct } from "../services/product.services";

function productController() {
    return {

        // Add product
        addProduct: async (req, res) => {
            const addedProduct = await addProduct(req.body)
            res.status(200).json(addedProduct);
        },
        
        // Find one product by ID 
        getSingleProduct: async (req, res) => {
            const product = await findProduct({_id:  mongoose.Types.ObjectId(req.params.id)})
            res.status(200).json(product);
        },

        // Get all products
        getAllProducts: async (req, res) => {
            const products = await getProducts()
            res.status(200).json(products);
        },

        // Update product by ID 
        updateProduct: async (req, res) => {
            const updatedProduct = await updateProduct({_id:  mongoose.Types.ObjectId(req.params.id)}, req.body)
            res.status(200).json(updatedProduct)
        },
    }
}
export { productController };