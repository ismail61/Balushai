import { Admin, Campaign } from "../../mongodb/admin";
import { globalErrorHandler } from "../../utils";

export const createCampaign = async (data, admin_id, res) => {
    try {
        const newCampaign = await new Campaign(data);
        return await newCampaign.save();
    } catch (err) {
        console.log(err);
        globalErrorHandler(err, res);
    }
};

export const getSingleCampaign = async (query) => {
    try {
        return await Campaign.findOne(query);
    } catch (err) {
        console.log(err);
    }
};

export const getAllCampaigns = async (query) => {
    try {
        return await Campaign.find(query);
    } catch (err) {
        console.log(err);
    }
};

export const getAllProducts = async (query) => {
    try {
        return await Campaign.findOne(query).select('products -_id').populate('products');
    } catch (err) {
        console.log(err);
    }
};

export const getAllVendors = async (query) => {
    try {
        await Campaign.findOne(query).select('vendors -_id').populate('vendors._id');       
    } catch (err) {
        console.log(err);
    }
};

export const getDynamicCampaign = async (status) => {
    try {
        return await Campaign.find({
            is_active: status
        })
    } catch (err) {
        console.log(err);
    }
};

export const updateCampaign = async (query, data) => {
    try {
        return await Campaign.findOneAndUpdate(query, { $set: data });
    } catch (err) {
        console.log(err);
    }
};

