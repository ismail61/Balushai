
  
import { FreeShipment } from "../../../mongodb/vendor/models"

export const createFreeShipping = async (data) => {
    try {
        
        const newFreeShipping = await new FreeShipment(data)
        return await newFreeShipping.save()
    } catch (err) {
        console.log(err)
    }
}

export const getSingleFreeShipping = async (query) => {
    try {
        return await FreeShipment.findOne(query)
    } catch (err) {
        console.log(err)
    }
}

export const getAllFreeShippings = async () => {
    try {
        return await FreeShipment.find({})
    } catch (err) {
        console.log(err)
    }
}

export const updateFreeShipping = async (query, data) => {
    try {
        return await FreeShipment.updateOne(query, { $set: data})
    } catch (err) {
        console.log(err)
    }
}

export const deleteFreeShipping = async (query) => {
    try {
        return await FreeShipment.deleteOne(query)
    } catch (err) {
        console.log(err)
    }
}