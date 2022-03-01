import { productController } from "../controllers";
import { tryCatchHandle } from "../utils";

function productRoutes(app) {

    // Product's CRUD Operation
    app.get('/vendor/products', tryCatchHandle(productController().getAllProducts));
    app.get('/vendor/product/:id', tryCatchHandle(productController().getSingleProduct));
    app.post('/vendor/add-product', tryCatchHandle(productController().addProduct));
    app.patch('/vendor/update-product/:id', tryCatchHandle(productController().updateProduct));
}
export { productRoutes };