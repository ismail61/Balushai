import { brandController } from "../../controllers/admin";
import { tryCatchHandle } from "../../utils";
function brandRoutes(app) {
    app.post('/admin/brand/create-brand', tryCatchHandle(brandController().createBrand));
    app.get('/admin/brands', tryCatchHandle(brandController().getAllBrands));
    app.get('/admin/brand/:id', tryCatchHandle(brandController().getSingleBrand));
    app.delete('/admin/brand/delete-brand/:id', tryCatchHandle(brandController().deleteBrand));
}
export { brandRoutes };