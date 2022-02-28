import { productController } from "../controllers";
import { tryCatchHandle } from "../utils";

function productRoutes(app) {
    app.post('/vendor/add-product', tryCatchHandle(productController().addProduct))
}
export { productRoutes };