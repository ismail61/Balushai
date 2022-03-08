import { productController } from "../../controllers/vendor";
import { tryCatchHandle } from "../../utils";

function productRoutes(app) {

    app.get('/vendor/products', tryCatchHandle(productController().getAllProducts));
    app.get('/vendor/product/:id', tryCatchHandle(productController().getSingleProduct));
    app.post('/vendor/add-product', tryCatchHandle(productController().addProduct));
    app.patch('/vendor/update-product/:id', tryCatchHandle(productController().updateProduct));
    app.patch('/vendor/delete-product/:id', tryCatchHandle(productController().deleteProduct));
    app.patch('/vendor/restore-product/:id', tryCatchHandle(productController().restoreProduct));
    app.patch('/vendor/active-product/:id', tryCatchHandle(productController().activeProduct));
    app.patch('/vendor/deactive-product/:id', tryCatchHandle(productController().deActiveProduct));
}
export { productRoutes };