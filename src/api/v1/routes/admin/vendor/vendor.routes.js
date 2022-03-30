
import { vendorController } from "../../../controllers/admin";
import { tryCatchHandle } from "../../../utils";

function vendorRoutes(app) {

    app.get('/admin/vendors', tryCatchHandle(vendorController().getAllVendors));
    app.get('/vendor/vendor/:id', tryCatchHandle(vendorController().getSingleVendor));
    app.get('/vendor/vendor/:slug', tryCatchHandle(vendorController().getSingleVendorBySlugName));
    app.get('/admin/deactivated-vendors', tryCatchHandle(vendorController().getAllDeActivatedVendors));
    app.get('/admin/activated-vendors', tryCatchHandle(vendorController().getAllActivatedVendors));
    app.patch('/admin/active-vendor/:id', tryCatchHandle(vendorController().activeVendor));
    app.patch('/admin/deactive-vendor/:id', tryCatchHandle(vendorController().deActiveVendor));
}
export { vendorRoutes };