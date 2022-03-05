import { orderController } from "../controllers";
import { tryCatchHandle } from "../utils";

function orderRoutes(app) {

    // Order's CRUD Operation
    app.get('/vendor/orders', tryCatchHandle(orderController().getAllOrders));
    app.get('/vendor/order/:id', tryCatchHandle(orderController().getSingleOrder));
    app.post('/vendor/add-order', tryCatchHandle(orderController().addOrder));
    app.patch('/vendor/update-order/:id', tryCatchHandle(orderController().updateOrder));
    app.delete('/vendor/delete/:id', tryCatchHandle(orderController().deleteOrder))
}
