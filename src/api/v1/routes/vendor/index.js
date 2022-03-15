import { accountRoutes } from './account.routes';
import { authRoutes } from './auth.routes.js';
import { imageRoutes } from './image.routes';
import { productRoutes } from './product.routes.js';
function VendorRoutes(app) {
    authRoutes(app);
    productRoutes(app);
    accountRoutes(app);
    imageRoutes(app);
}
export { VendorRoutes };