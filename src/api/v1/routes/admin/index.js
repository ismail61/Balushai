import { brandRoutes } from "./brand.routes";
import { categoryRoutes } from "./category.routes";

function AdminRoutes(app) {
    categoryRoutes(app)
    brandRoutes(app);
}
export { AdminRoutes };