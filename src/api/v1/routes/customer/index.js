import { accountRoutes } from "./account.routes";
import { addressRoutes } from "./address.routes";
import { authRoutes } from "./auth.routes";
import { orderRoutes } from "./order.routes";
import { productRoutes } from "./product.routes";
import { reviewRoutes } from "./review.routes";
import { shopInfoRoutes } from "./shop.info.routes";

function CustomerRoutes(app) {
    authRoutes(app);
    accountRoutes(app);
    productRoutes(app);
    orderRoutes(app);
    reviewRoutes(app);
    shopInfoRoutes(app);
    addressRoutes(app);
}
export { CustomerRoutes };