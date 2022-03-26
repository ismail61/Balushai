
import { error } from '../../utils';
import validator from "validator";
import { getDynamicStatusProducts, getProduct, getProducts, updateProduct } from '../../services/admin';

function productController() {
    return {

        // Get All Products
        getAllProducts: async (req, res) => {
            const products = await getProducts({});
            res.status(200).json(products);
        },

        // Find One Product by ID 
        getSingleProduct: async (req, res) => {
            const product = await getProduct({ _id: req.params?.id });
            if (!product) return error().resourceError(res, 'Sorry! This product doest not exists or something wrong', 422);
            res.status(200).json(product);
        },
        // Get All Pending Products
        getAllPendingProducts: async (req, res) => {
            const productsObject = await getDynamicStatusProducts('PENDING');
            res.status(200).json(productsObject?.products);
        },

        // Get All Online Products
        getAllOnlineProducts: async (req, res) => {
            const productsObject = await getDynamicStatusProducts('APPROVED');
            res.status(200).json(productsObject?.products);
        },
        // Suspend Product by ID
        suspendedProduct: async (req, res) => {

            const { suspended_reasons } = req.body;
            if (!suspended_reasons) return error().resourceError(res, 'Suspended reasons is Required', 422);

            const product = await updateProduct({ _id: req.params?.id }, {
                status: 'SUSPENDED',
                suspended_reasons: validator.escape(suspended_reasons)
            });

            if (!product) return error().resourceError(res, 'Sorry! This product doest not exists or something wrong', 422);
            res.status(200).json(product);
        },

        // Approved Product by ID
        approvedProduct: async (req, res) => {

            const product = await updateProduct({ _id: req.params?.id }, {
                status: 'APPROVED'
            });

            if (!product) return error().resourceError(res, 'Sorry! This product doest not exists or something wrong', 422);
            res.status(200).json(product);
        },
    }
}
export { productController };