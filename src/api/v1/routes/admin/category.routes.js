import { categoryController } from "../../controllers/admin";
import { tryCatchHandle } from "../../utils";

function categoryRoutes (app) {
    app.post('/admin/create-category', tryCatchHandle(categoryController().createCategory))
    app.get('/admin/categories', tryCatchHandle(categoryController().getAllCategory))
    app.get('admin/product/:id', tryCatchHandle(categoryController().getSingleCategory))
}

export { categoryRoutes }