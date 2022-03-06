/* user_id,
product_id,
vendor_id,
user_message,
reply_message,
timestap */
import mongoose from 'mongoose'

/* *****************************
* Question & Answer schema here
********************************/
const questionAnswerSchema = mongoose.Schema({
    product_id: {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        }
    },
    vendor_id: {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Vendor'
        }
    },
    user_mesage: String,
    reply_message: String
}, { 
    timestamps: true 
});

export default mongoose.model('QuestionAnswer', questionAnswerSchema)