
import { generatePasswordHash, globalErrorHandler } from "../../utils";
import { Customer } from "../../mongodb/customer";

export const findCustomerByIDAndTokenUpdate = async (query, data, res) => {
    try {
        return await Customer.findOneAndUpdate(query, data, { new: true })
    } catch (err) {
        console.log(err);
        globalErrorHandler(err, res);
    }
}


export const createCustomer = async (data, res) => {
    try {
        const { name, email, phone, password } = data;

        //password hash using bcrypt
        const hashPassword = await generatePasswordHash(password);

        return await Customer.create({
            name,
            email,
            phone,
            password: hashPassword
        })
    } catch (err) {
        console.log(err);
        globalErrorHandler(err, res);
    }
}

export const findCustomerUsingEmail = async (data, res) => {
    try {
        return await Customer.findOne(data);
    } catch (err) {
        console.log(err);
        globalErrorHandler(err, res);
    }
}


export const findCustomerUsingID = async (id, res) => {
    try {
        return await Customer.findById(id);
    } catch (err) {
        console.log(err);
        globalErrorHandler(err, res);
    }
}

export const findCustomerByIDAndUpdate = async (id, data, res) => {
    try {
        return await Customer.findByIdAndUpdate(id, data, { new: true });
    } catch (err) {
        console.log(err);
        globalErrorHandler(err, res);
    }
}
