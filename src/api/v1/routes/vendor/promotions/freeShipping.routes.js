import { freeShippingController } from "../../../controllers/vendor";
import { tryCatchHandle } from "../../../utils";

function freeShippingRoutes(app) {

    app.get('/vendor/promotions/free-shippings', tryCatchHandle(freeShippingController().getAllFreeShippings));
    app.get('/vendor/promotions/free-shipping/:id', tryCatchHandle(freeShippingController().getSingleFreeShipping));
    app.post('/vendor/promotions/create-free-shipping', tryCatchHandle(freeShippingController().createFreeShipping));
    app.post('/vendor/promotions/update-free-shipping/:id', tryCatchHandle(freeShippingController().updateFreeShipping));
}
export { freeShippingRoutes };