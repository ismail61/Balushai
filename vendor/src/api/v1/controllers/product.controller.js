import mongoose from 'mongoose';
import { addProduct, findProduct, getProducts, updateProduct } from "../services/product.services";
import { error, validatorEscape } from '../utils';
import { productValidation } from '../validations';

function productController() {
    return {

        // Add product
        addProduct: async (req, res) => {
            //malicious data refactor
            // const refactor_data = await validatorEscape(req.body); 
            // Can not use refactor here. Nested object exist.
            
            const validation = productValidation(req.body);
            if(validation.error) return error().resourceError(res, validation.error?.details[0].message, 422)
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
            const validation = productValidation(req.body)
            if(validation.error) return error().resourceError(res, validation.error?.details[0].message, 422)
            const updatedProduct = await updateProduct({_id:  mongoose.Types.ObjectId(req.params.id)}, req.body)
            res.status(200).json(updatedProduct)
        },
    }
}
export { productController };