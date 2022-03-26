import { categoryController } from "../../controllers/admin";
import { tryCatchHandle } from "../../utils";
import { upload } from '../../middlewares/commom';

function categoryRoutes(app) {
    app.post('/admin/category/create-category', upload.single('image'), tryCatchHandle(categoryController().createCategory));
    app.get('/admin/categories', tryCatchHandle(categoryController().getAllCategory));
    app.get('/admin/top-menu-categories', tryCatchHandle(categoryController().getAllTopMenuCategory));
    app.get('/admin/home-page-categories', tryCatchHandle(categoryController().getAllHomePageCategory));
    app.get('/admin/published-categories', tryCatchHandle(categoryController().getAllPublishedCategory));
    app.get('/admin/category/products/:id', tryCatchHandle(categoryController().getAllProductBySpecificCategory));
    app.get('/admin/category/:id', tryCatchHandle(categoryController().getSingleCategory));
    app.patch('/admin/category/:id', upload.single('image'), tryCatchHandle(categoryController().updateCategory));
    app.patch('/admin/category/published/:id', tryCatchHandle(categoryController().publishedCategory));
    app.patch('/admin/category/unpublished/:id', tryCatchHandle(categoryController().unPublishedCategory));
    app.patch('/admin/category/show-home-page/:id', tryCatchHandle(categoryController().showHomePageCategory));
    app.patch('/admin/category/hide-home-page/:id', tryCatchHandle(categoryController().hideHomePageCategory));
    app.patch('/admin/category/show-top-menu/:id', tryCatchHandle(categoryController().showTopMenuCategory));
    app.patch('/admin/category/hide-top-menu/:id', tryCatchHandle(categoryController().hideTopMenuCategory));
}
export { categoryRoutes };