import { orderController } from "../controllers";
import { tryCatchHandle } from "../utils";

function orderRoutes(app) {

    // Order's CRUD Operation
    app.get('/vendor/orders', tryCatchHandle(orderController().getAllOrders));
    app.get('/vendor/order/:id', tryCatchHandle(orderController().getSingleOrder));
    app.post('/vendor/create-order', tryCatchHandle(orderController().createOrder));
    app.patch('/vendor/update-order/:id', tryCatchHandle(orderController().updateOrder));
}

export { orderRoutes }