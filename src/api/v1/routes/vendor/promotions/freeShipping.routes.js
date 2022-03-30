import { freeShippingController } from "../../../controllers/vendor";
import { tryCatchHandle } from "../../../utils";
import { vendorAuthentication } from "../../../middlewares/vendor";

function freeShippingRoutes(app) {
    app.get(
        "/vendor/promotions/free-shippings",
        vendorAuthentication,
        tryCatchHandle(freeShippingController().getAllFreeShippings)
    );
    app.get(
        "/vendor/promotions/active-free-shippings",
        vendorAuthentication,
        tryCatchHandle(freeShippingController().getAllActiveFreeShippings)
    );
    app.get(
        "/vendor/promotions/deactive-free-shippings",
        vendorAuthentication,
        tryCatchHandle(freeShippingController().getAllDeActiveFreeShippings)
    );
    app.get(
        "/vendor/promotions/free-shipping/:id",
        vendorAuthentication,
        tryCatchHandle(freeShippingController().getSingleFreeShipping)
    );
    app.post(
        "/vendor/promotions/create-free-shipping",
        vendorAuthentication,
        tryCatchHandle(freeShippingController().createFreeShipping)
    );
    app.post(
        "/vendor/promotions/update-free-shipping/:id",
        vendorAuthentication,
        tryCatchHandle(freeShippingController().updateFreeShipping)
    );
    app.post(
        "/vendor/promotions/active-voucher/:id",
        vendorAuthentication,
        tryCatchHandle(freeShippingController().activeFreeShipping)
    );
    app.post(
        "/vendor/promotions/deactive-voucher/:id",
        vendorAuthentication,
        tryCatchHandle(freeShippingController().deActiveFreeShipping)
    );
}
export { freeShippingRoutes };
