import { orderController } from "../controllers/order.controller";
import { tryCatchHandle } from "../../utils";
import {vendorAuthentication} from '../../middlewares/vendor'

function orderRoutes(app) {

    app.get('/vendor/orders',vendorAuthentication, tryCatchHandle(orderController().getAllOrders));
    app.get('/vendor/order/:id',vendorAuthentication, tryCatchHandle(orderController().getSingleOrder));
}
export { orderRoutes };