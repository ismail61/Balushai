import mongoose from "mongoose";

const CustomerChat = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    vendors: [
        {
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Vendor',
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

export default mongoose.model('CustomerChat', CustomerChat)