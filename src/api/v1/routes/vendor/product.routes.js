import { productController } from "../../controllers/vendor";
import { tryCatchHandle } from "../../utils";
import { vendorAuthentication } from '../../middlewares/vendor'
import { upload } from '../../middlewares/commom'

function productRoutes(app) {

    app.get('/vendor/products', vendorAuthentication, tryCatchHandle(productController().getAllProducts));
    app.get('/vendor/product/:id', vendorAuthentication, tryCatchHandle(productController().getSingleProduct));
    app.get('/vendor/product/:slug', vendorAuthentication, tryCatchHandle(productController().getSingleProductBySlug));
    app.post('/vendor/add-product', vendorAuthentication, upload.array('image'), tryCatchHandle(productController().addProduct));
    app.patch('/vendor/update-product/:id', vendorAuthentication, tryCatchHandle(productController().updateProduct));
    app.patch('/vendor/delete-product/:id', vendorAuthentication, tryCatchHandle(productController().deleteProduct));
    app.patch('/vendor/restore-product/:id', vendorAuthentication, tryCatchHandle(productController().restoreProduct));
    app.patch('/vendor/active-product/:id', vendorAuthentication, tryCatchHandle(productController().activeProduct));
    app.patch('/vendor/deactive-product/:id', vendorAuthentication, tryCatchHandle(productController().deActiveProduct));
}
export { productRoutes };