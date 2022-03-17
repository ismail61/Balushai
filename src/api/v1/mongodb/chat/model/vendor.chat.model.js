import mongoose from "mongoose";

const VendorChatSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    customers: [
        {
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Customer',
                messages: [
                    {
                        _id: {
                            type: mongoose.Schema.Types.ObjectId,
                            ref: 'Message',
                        }
                    }
                ]
            },
        }
    ]
})

export default mongoose.model('VendorChat', VendorChatSchema)