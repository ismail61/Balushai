import { orderController } from "../controllers/order.controller";
import { tryCatchHandle } from "../../utils";

function productRoutes(app) {

    app.get('/vendor/orders', tryCatchHandle(orderController().getAllOrders));
    app.get('/vendor/order/:id', tryCatchHandle(orderController().getSingleOrder));
}
export { productRoutes };