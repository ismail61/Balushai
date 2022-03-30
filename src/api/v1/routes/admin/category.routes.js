import { categoryController } from "../../controllers/admin";
import { tryCatchHandle } from "../../utils";
import { upload } from '../../middlewares/commom';
import { adminAuthentication } from "../../middlewares/admin";

function categoryRoutes(app) {
    app.post('/admin/category/create-category',adminAuthentication, upload.single('image'), tryCatchHandle(categoryController().createCategory));
    app.get('/admin/categories',adminAuthentication, tryCatchHandle(categoryController().getAllCategory));
    app.get('/admin/top-menu-categories',adminAuthentication, tryCatchHandle(categoryController().getAllTopMenuCategory));
    app.get('/admin/home-page-categories',adminAuthentication, tryCatchHandle(categoryController().getAllHomePageCategory));
    app.get('/admin/published-categories',adminAuthentication, tryCatchHandle(categoryController().getAllPublishedCategory));
    app.get('/admin/category/products/:id',adminAuthentication, tryCatchHandle(categoryController().getAllProductBySpecificCategory));
    app.get('/admin/category/:id',adminAuthentication, tryCatchHandle(categoryController().getSingleCategory));
    app.patch('/admin/category/:id',adminAuthentication, upload.single('image'), tryCatchHandle(categoryController().updateCategory));
    app.patch('/admin/category/published/:id',adminAuthentication, tryCatchHandle(categoryController().publishedCategory));
    app.patch('/admin/category/unpublished/:id',adminAuthentication, tryCatchHandle(categoryController().unPublishedCategory));
    app.patch('/admin/category/show-home-page/:id',adminAuthentication, tryCatchHandle(categoryController().showHomePageCategory));
    app.patch('/admin/category/hide-home-page/:id',adminAuthentication, tryCatchHandle(categoryController().hideHomePageCategory));
    app.patch('/admin/category/show-top-menu/:id',adminAuthentication, tryCatchHandle(categoryController().showTopMenuCategory));
    app.patch('/admin/category/hide-top-menu/:id',adminAuthentication, tryCatchHandle(categoryController().hideTopMenuCategory));
}
export { categoryRoutes };