import { brandController } from "../../controllers/admin";
import { adminAuthentication } from "../../middlewares/admin";
import { tryCatchHandle } from "../../utils";
function brandRoutes(app) {
    app.post('/admin/brand/create-brand', adminAuthentication, tryCatchHandle(brandController().createBrand));
    app.get('/admin/brands', adminAuthentication, tryCatchHandle(brandController().getAllBrands));
    app.get('/admin/brand/:id', adminAuthentication, tryCatchHandle(brandController().getSingleBrand));
    app.delete('/admin/brand/delete-brand/:id', adminAuthentication, tryCatchHandle(brandController().deleteBrand));
}
export { brandRoutes };