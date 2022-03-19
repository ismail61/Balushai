import mongoose from 'mongoose'

const MessageSchema = new mongoose.Schema({
    sender: {
        type: String,
        enum: ['CUSTOMER', 'VENDOR'],
        required: true
    },
    vendor_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'VendorChat',
        required: true
    },
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CustomerChat',
        required: true
    },
    message: {
        type: String,
        trim: true,
        required: true
    },
    is_deleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

export default mongoose.model('Message', MessageSchema)