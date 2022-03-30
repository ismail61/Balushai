import { accountRoutes } from './account.routes';
import { authRoutes } from './auth.routes.js';
import { imageRoutes } from './image.routes';
import { productRoutes } from './product.routes.js';
import { freeShippingRoutes } from './promotions/freeShipping.routes';
import { voucherRoutes } from './promotions/voucher.routes';
function VendorRoutes(app) {
    authRoutes(app);
    productRoutes(app);
    accountRoutes(app);
    imageRoutes(app);
    voucherRoutes(app);
    freeShippingRoutes(app);

}
export { VendorRoutes };