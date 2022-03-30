
import mongoose from "mongoose"
// String type & required
const StringRequired = {
    type: String,
    required: true
}

// Number type & required
const NumberRequired = {
    type: Number,
    required: true
}
const campaignSchema = mongoose.Schema({
    name: {
        ...NumberRequired,
        index: true
    },
    start_from: {
        type: Date,
        required: true
    },
    end_time: {
        type: Date,
        required: true
    },
    is_active: {
        type: Boolean,
        default: true
    },
    discount: NumberRequired, // like 10% 
    vendors: [
        {
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Vendor',
            },
            products: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Product',
                }
            ]
        }
    ],
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
        }
    ]
}, {
    timestamps: true
})


export default mongoose.model('Campaign', campaignSchema)