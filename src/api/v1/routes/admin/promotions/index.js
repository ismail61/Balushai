import { campaignRoutes } from "./campaign.routes";
import { voucherRoutes } from "./voucher.routes";

function PromotionRoutes(app) {
    voucherRoutes(app);
    campaignRoutes(app);
}
export { PromotionRoutes };