
import { campaignController } from "../../../controllers/admin";
import { adminAuthentication } from "../../../middlewares/admin";
import { tryCatchHandle } from "../../../utils";

function campaignRoutes(app) {
    app.get(
        "/vendor/promotions/campaigns",
        adminAuthentication,
        tryCatchHandle(campaignController().getAllCampaigns)
    );
    app.get(
        "/vendor/promotions/active-campaign",
        adminAuthentication,
        tryCatchHandle(campaignController().getAllActiveCampaigns)
    );
    app.get(
        "/vendor/promotions/campaign-products/:id",
        adminAuthentication,
        tryCatchHandle(campaignController().getSingleCampaignProducts)
    );
    app.get(
        "/vendor/promotions/campaign-vendors/:id",
        adminAuthentication,
        tryCatchHandle(campaignController().getSingleCampaignVendors)
    );
    app.get(
        "/vendor/promotions/deactive-campaign",
        adminAuthentication,
        tryCatchHandle(campaignController().getAllDeActiveCampaigns)
    );
    app.get(
        "/vendor/promotions/campaign/:id",
        adminAuthentication,
        tryCatchHandle(campaignController().getSingleCampaign)
    );
    app.post(
        "/vendor/promotions/create-campaign",
        adminAuthentication,
        tryCatchHandle(campaignController().createCampaign)
    );
    app.patch(
        "/vendor/promotions/update-campaign/:id",
        adminAuthentication,
        tryCatchHandle(campaignController().updateCampaign)
    );
    app.patch(
        "/vendor/promotions/active-campaign/:id",
        adminAuthentication,
        tryCatchHandle(campaignController().activeCampaign)
    );
    app.patch(
        "/vendor/promotions/deactive-campaign/:id",
        adminAuthentication,
        tryCatchHandle(campaignController().deActiveCampaign)
    );
}
export { campaignRoutes };
