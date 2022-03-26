import { Otp } from "../../mongodb/vendor";

export const insertOtp = async (data) => {
    try {
        return await Otp.create(data);
    } catch (err) {
        console.log(err);
    }
}


export const deleteOtp = async (data) => {
    try {
        return await Otp.findOneAndDelete(data);
    } catch (err) {
        console.log(err);
    }
}

export const verifyPhoneOtp = async (data) => {
    try {
        return await Otp.findOne(data);
    } catch (err) {
        console.log(err);
    }
}