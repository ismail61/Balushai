
import { addProduct, getProduct, updateProduct, sellerSKUCheck, getAllProducts } from "../../services/vendor";
import { error } from '../../utils';
import { productValidation } from '../../validations';

function productController() {
    return {

        // Add  a new product
        addProduct: async (req, res) => {
            // validation check

            const validation = productValidation(req.body);
            if (validation.error) return error().resourceError(res, validation.error?.details[0].message, 422);

            //seller sku check
            const seller_sku_check = await sellerSKUCheck(req.body);
            if (seller_sku_check) return error().resourceError(res, 'Seller SKU Match!. Please input different seller_sku number', 422);

            if (req.fileExtensionValidationError) return error().resourceError(res, 'Only .png, .jpg and .jpeg format allowed!', 415)
            if (req.file?.size >= 3 * 1024 * 1024) return error().resourceError(res, 'Image size mus lower than 3 MB', 409)

            //image upload if seller provide any image for document
            if (req.file) {
                const image_upload = await cloudinary.v2.uploader.upload(req.file?.path, { folder: 'balushai/vendor/documents', use_filename: true })
                if (!image_upload?.url) return error().resourceError(res, 'Image Saved Failed . Please try again', 500)
                document = image_upload?.url
            }
            const newProduct = await addProduct(req.user?._id, req.body);
            res.status(200).json(newProduct);
        },

        // Find One Product by ID 
        getSingleProduct: async (req, res) => {
            const product = await getProduct({ $and: [{ _id: req.params?.id }, { vendor_id: req.user?._id }] });
            if (!product) return error().resourceError(res, 'Sorry! This product doest not exits or something wrong', 422);
            res.status(200).json(product);
        },

        // Get All Products
        getAllProducts: async (req, res) => {
            const products = await getAllProducts({ vendor_id: req.user?._id });
            res.status(200).json(products);
        },

        // Update Product by ID 
        updateProduct: async (req, res) => {
            const validation = productValidation(req.body);
            if (validation.error) return error().resourceError(res, validation.error?.details[0].message, 422);

            const updatedProduct = await updateProduct({ _id: req.params?.id }, req.body);
            res.status(200).json(updatedProduct);
        },

        // Delete Product by ID 
        deleteProduct: async (req, res) => {
            const deletedProduct = await updateProduct({ _id: req.params?.id }, { is_deleted: true });
            if (!deletedProduct) return error().resourceError(res, 'Sorry! This product doest not exits or something wrong', 422);
            res.status(200).json(deletedProduct);
        },

        // Restore Product by ID 
        restoreProduct: async (req, res) => {
            const restoredProduct = await updateProduct({ _id: req.params?.id }, { is_deleted: false });
            if (!restoredProduct) return error().resourceError(res, 'Sorry! This product doest not exits or something wrong', 422);
            res.status(200).json(restoredProduct);
        },

        // Active Product by ID 
        activeProduct: async (req, res) => {
            const activeProduct = await updateProduct({ _id: req.params?.id }, { is_active: true });
            if (!activeProduct) return error().resourceError(res, 'Sorry! This product doest not exits or something wrong', 422);
            res.status(200).json(activeProduct);
        },

        // De Active Product by ID 
        deActiveProduct: async (req, res) => {
            const deActiveProduct = await updateProduct({ _id: req.params?.id }, { is_active: false });
            if (!deActiveProduct) return error().resourceError(res, 'Sorry! This product doest not exits or something wrong', 422);
            res.status(200).json(deActiveProduct);
        }  
    }    
}
export { productController };