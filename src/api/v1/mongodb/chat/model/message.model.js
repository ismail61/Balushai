import mongoose from 'mongoose'

const MessageSchema = new mongoose.Schema({
    sender: {
        type: String,
        enum: ['Customer', 'Vendor'],
        required: true
    },
    vendor_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'VendorChat',
    },
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CustomerChat',
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