
import { productController } from "../../../controllers/admin";
import { tryCatchHandle } from "../../../utils";

function productRoutes(app) {

    app.get('/admin/products', tryCatchHandle(productController().getAllProducts));
    app.get('/admin/product/:id', tryCatchHandle(productController().getSingleProduct));
    app.get('/admin/online-products', tryCatchHandle(productController().getAllOnlineProducts));
    app.get('/admin/pending-products', tryCatchHandle(productController().getAllPendingProducts));
    app.patch('/admin/product/suspended/:id', tryCatchHandle(productController().suspendedProduct));
    app.patch('/admin/product/approved/:id', tryCatchHandle(productController().approvedProduct));
}
export { productRoutes };