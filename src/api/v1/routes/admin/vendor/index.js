import { productRoutes } from "./product.routes";
import { vendorRoutes } from "./vendor.routes";

function VendorControlRoutes(app) {
    productRoutes(app);
    vendorRoutes(app);
}
export { VendorControlRoutes };