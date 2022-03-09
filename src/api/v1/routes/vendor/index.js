import { vendorAuthentication } from '../../middlewares/vendor';
import { accountRoutes } from './account.routes';
import { authRoutes } from './auth.routes.js';
import { productRoutes } from './product.routes.js';
import { freeShippingRoutes } from './promotions/freeShipping.routes';
import { voucherRoutes } from './promotions/voucher.routes';
function routes(app) {
    authRoutes(app);
    app.use(vendorAuthentication);
    productRoutes(app);
    accountRoutes(app);
    freeShippingRoutes(app);
    voucherRoutes(app)
}
export { routes };