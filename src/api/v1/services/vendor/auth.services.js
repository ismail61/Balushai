
import { generatePasswordHash, generateRandomSellerId, globalErrorHandler } from "../../utils";
import { Vendor } from "../../mongodb/vendor";
import slugify from "slugify";

export const findVendorUsingEmailOrPhoneNumber = async (data) => {
    try {
        return await Vendor.findOne(data);
    } catch (err) {
        console.log(err);
    }
}

export const findVendorUsingShopName = async (data) => {
    try {
        return await Vendor.findOne(data);
    } catch (err) {
        console.log(err);
    }
}

export const createVendor = async (data, res) => {
    try {
        const { shop_name, email, phone, password } = data;
        const seller_id = await generateRandomSellerId();
        //password hash using bcrypt
        const hashPassword = await generatePasswordHash(password);
        return await Vendor.create({
            seller_id,
            seller_account: {
                email,
                shop_name,
                slug: slugify(shop_name)?.toLowerCase(),
                phone
            },
            password: hashPassword
        })
    } catch (err) {
        console.log(err);
        globalErrorHandler(err,res);
    }
}

export const findVendorUsingEmail = async (data) => {
    try {
        return await Vendor.findOne(data);
    } catch (err) {
        console.log(err);
    }
}

export const findVendorUsingPhone = async (data) => {
    try {
        return await Vendor.findOne(data);
    } catch (err) {
        console.log(err);
    }
}

export const findVendorUsingID = async (data) => {
    try {
        return await Vendor.findOne(data);
    } catch (err) {
        console.log(err);
    }
}

