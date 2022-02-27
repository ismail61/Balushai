import { Vendor } from "../mongodb/models";
import { generatePasswordHash, generateRandomSellerId } from "../utils";

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

export const createVendor = async (data) => {
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
                phone
            },
            password: hashPassword
        })
    } catch (err) {
        console.log(err);
    }
}

export const findVendorUsingEmail = async (data) => {
    try {
        return await Vendor.findOne(data);
    } catch (err) {
        console.log(err);
    }
}
