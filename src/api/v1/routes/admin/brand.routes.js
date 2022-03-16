import { brandController } from "../../controllers/admin";
import { tryCatchHandle } from "../../utils";
function brandRoutes(app) {
    app.post('/admin/create-brand', tryCatchHandle(brandController().createBrand));
    app.get('/admin/brands', tryCatchHandle(brandController().getAllBrands));
    app.get('/admin/delete-brand/:id', tryCatchHandle(brandController().deleteBrand));
    app.get('/admin/update-brand/:id', tryCatchHandle(brandController().updateBrand));
}
export { brandRoutes };