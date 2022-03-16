import { orderController } from "../../controllers/common";
import { tryCatchHandle } from "../../utils";
import { customerAuthentication } from '../../middlewares/customer/'

function orderRoutes(app) {

    app.get('/customer/orders', customerAuthentication, tryCatchHandle(orderController().getCustomerAllOrders));
    app.get('/customer/order/:id', customerAuthentication, tryCatchHandle(orderController().getCustomerSingleOrder));
    app.post('/customer/create-order', customerAuthentication, tryCatchHandle(orderController().createOrder));
    app.patch('/customer/cancel-order/:id', customerAuthentication, tryCatchHandle(orderController().cancelOrder));
}
export { orderRoutes };