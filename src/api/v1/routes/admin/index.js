import { authRoutes } from "./auth.routes";
import { brandRoutes } from "./brand.routes";
import { categoryRoutes } from "./category.routes";
import { PromotionRoutes } from "./promotions";
import { VendorControlRoutes } from "./vendor";

function AdminRoutes(app) {
    authRoutes(app);
    categoryRoutes(app)
    brandRoutes(app);
    VendorControlRoutes(app);
    PromotionRoutes(app);
}
export { AdminRoutes };