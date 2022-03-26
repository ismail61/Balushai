import { brandRoutes } from "./brand.routes";
import { categoryRoutes } from "./category.routes";
import { productRoutes } from "./product.routes";
import { vendorRoutes } from "./vendor.routes";

function AdminRoutes(app) {
    categoryRoutes(app)
    brandRoutes(app);
    productRoutes(app);
    vendorRoutes(app);
}
export { AdminRoutes };