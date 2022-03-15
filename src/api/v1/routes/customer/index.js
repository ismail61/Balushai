import { accountRoutes } from "./account.routes";
import { authRoutes } from "./auth.routes";
import { orderRoutes } from "./order.routes";
import { reviewRoutes } from "./review.routes";

function CustomerRoutes(app) {
    authRoutes(app);
    accountRoutes(app);
    orderRoutes(app);
    reviewRoutes(app);
}
export { CustomerRoutes };