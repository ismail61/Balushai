import { createCampaign, getAllCampaigns, getAllProducts, getDynamicCampaign, getSingleCampaign, updateCampaign } from "../../../services/admin";
import { error } from "../../../utils";

function campaignController() {
    return {
        // Create a new Campaign
        createCampaign: async (req, res) => {
            const validation = campaignValidation(req.body);
            if (validation.error)
                return error().resourceError(
                    res,
                    validation.error?.details[0].message,
                    422
                );

            const addedCampaign = await createCampaign(req.body, req.admin?._id, res);
            res.status(200).json(addedCampaign);
        },

        // Find single Campaign by ID
        getSingleCampaign: async (req, res) => {
            const campaign = getSingleCampaign({ _id: req.params?._id });
            if (!campaign) return error().resourceError(res, 'Sorry! This Campaign doest not exists or something wrong', 422);
            res.status(200).json(campaign);
        },

        // Get all Active Campaigns
        getAllActiveCampaigns: async (req, res) => {
            const campaigns = await getDynamicCampaign(true);
            res.status(200).json(campaigns);
        },

        // Get Campaign Products
        getSingleCampaignProducts: async (req, res) => {
            const campaigns = await getAllProducts({ _id: req.params?._id });
            res.status(200).json(campaigns | []);
        },
        // Get Campaign Vendors
        getSingleCampaignVendors: async (req, res) => {
            const campaigns = await getAllVendors({ _id: req.params?._id });
            res.status(200).json(campaigns | []);
        },

        // Get all DeActive Campaigns
        getAllDeActiveCampaigns: async (req, res) => {
            const campaigns = await getDynamicCampaign(false);
            res.status(200).json(campaigns);
        },

        // Get all Campaigns
        getAllCampaigns: async (req, res) => {
            const campaigns = await getAllCampaigns({});
            res.status(200).json(campaigns);
        },

        // Update single Campaign by ID
        updateCampaign: async (req, res) => {

            const validation = campaignValidation(req.body);
            if (validation.error) return error().resourceError(res, validation.error?.message, 422);

            const updatedCampaign = await updateCampaign(
                { _id: req.params?.id },
                req.body
            );
            if (!updatedCampaign) return error().resourceError(res, 'Sorry! This Campaign doest not exists or something wrong', 422);
            res.status(200).json(updatedCampaign);
        },

        // Active single Campaign by ID
        activeCampaign: async (req, res) => {
            const updatedCampaign = await updateCampaign(
                { _id: req.params?.id },
                { is_active: true }
            );
            if (!updatedCampaign) return error().resourceError(res, 'Sorry! This Campaign doest not exists or something wrong', 422);
            res.status(200).json(updatedCampaign);
        },

        // De Active single Campaign by ID
        deActiveCampaign: async (req, res) => {
            const updatedCampaign = await updateCampaign(
                { _id: req.params?.id },
                { is_active: false }
            );
            if (!updatedCampaign) return error().resourceError(res, 'Sorry! This Campaign doest not exists or something wrong', 422);
            res.status(200).json(updatedCampaign);
        },
    };
}

export { campaignController };
