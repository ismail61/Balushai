import { AdminRoutes } from "./admin";
import { ChatRoutes } from "./chat";
import { CustomerRoutes } from "./customer";
import { VendorRoutes } from "./vendor";

function routes(app) {
    CustomerRoutes(app);
    VendorRoutes(app);
    AdminRoutes(app);
    ChatRoutes(app)
}
export { routes };