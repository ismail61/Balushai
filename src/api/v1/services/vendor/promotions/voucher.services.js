
  
import { Voucher } from "../../../mongodb/vendor/models"

export const createVoucher = async (data) => {
    try {
        
        const newVoucher = await new Voucher(data)
        return await newVoucher.save()
    } catch (err) {
        console.log(err)
    }
}

export const getSingleVoucher = async (query) => {
    try {
        return await Voucher.findOne(query)
    } catch (err) {
        console.log(err)
    }
}

export const getAllVouchers = async () => {
    try {
        return await Voucher.find({})
    } catch (err) {
        console.log(err)
    }
}

export const updateVoucher = async (query, data) => {
    try {
        return await Voucher.updateOne(query, { $set: data})
    } catch (err) {
        console.log(err)
    }
}

export const deleteVoucher = async (query) => {
    try {
        return await Voucher.deleteOne(query)
    } catch (err) {
        console.log(err)
    }
}