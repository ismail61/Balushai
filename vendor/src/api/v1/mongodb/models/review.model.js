import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    review_description: {
        type: String,
        trim: true,
    },
    rating: {
        type: Number,
        max: 5,
        min: 1
    },
    image: [String]
}, { timestamps: { createdAt: true }})


export default mongoose.model('review', reviewSchema);