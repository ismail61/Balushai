
import { generatePasswordHash } from "../../utils";
import { Admin } from "../../mongodb/admin";

export const findAdminByIDAndTokenUpdate = async (query, data) => {
    try {
        return await Admin.findOneAndUpdate(query, data, { new: true })
    } catch (err) {
        console.log(err);
    }
}


export const createAdmin = async (data) => {
    try {
        const { email, phone, password } = data;

        //password hash using bcrypt
        const hashPassword = await generatePasswordHash(password);

        return await Admin.create({
            email,
            phone,
            password: hashPassword
        })
    } catch (err) {
        console.log(err);
    }
}

export const findAdminUsingIdAndToken = async (data) => {
    try {
        return await Admin.findOne(data);
    } catch (err) {
        console.log(err);
    }
}

export const findAdminUsingEmail = async (data) => {
    try {
        return await Admin.findOne(data);
    } catch (err) {
        console.log(err);
    }
}

