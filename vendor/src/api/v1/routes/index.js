import { vendorAuthentication } from '../middlewares';
import { accountRoutes } from './account.routes';
import { authRoutes } from './auth.routes.js';
import { orderRoutes } from './order.routes';
import { productRoutes } from './product.routes.js';
import { questionAnswerRoutes } from './questionAnswer.routes';
function routes(app) {
    authRoutes(app);
    app.use(vendorAuthentication);
    productRoutes(app);
    accountRoutes(app);
    orderRoutes(app)
    questionAnswerRoutes(app)
}
export { routes };