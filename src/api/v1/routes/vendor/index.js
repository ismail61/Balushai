import { vendorAuthentication } from '../../middlewares/vendor';
import { accountRoutes } from './account.routes';
import { authRoutes } from './auth.routes.js';
import { productRoutes } from './product.routes.js';
function routes(app) {
    authRoutes(app);
    app.use(vendorAuthentication);
    productRoutes(app);
    accountRoutes(app);
}
export { routes };