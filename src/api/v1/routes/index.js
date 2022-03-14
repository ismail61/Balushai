import { brandRoutes, categoryRoutes } from "./admin";
import { accountRoutes, authRoutes, freeShippingRoutes, productRoutes, vendorAuthentication, voucherRoutes } from "./vendor";

function routes(app) {
    authRoutes(app);
    app.use(vendorAuthentication);
    productRoutes(app);
    accountRoutes(app);
    freeShippingRoutes(app);
    voucherRoutes(app);
    brandRoutes(app);
    categoryRoutes(app)
}
export { routes };