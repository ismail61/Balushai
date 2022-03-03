/********************
 * Review Schema here
 ********************/
 const reviewSchema = mongoose.Schema({
    description: {
        type: String,
        maxLength: 300
    },
    image: [{
        url: String
    }],
    product_id: {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
        }
    },
    rating: {
        type: Number,
        max: 5,
        min: 1,
        required: true
    },
    reply: {
        description: {
            type: String,
            maxLength: 255
        }
    },
    report: String,
    order_id: {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
        }
    },
    status : {
        type: String,
        default: 'NOT_REPLIED',
        enum: ['REPLIED', 'NOT_REPLIED']
    }
}, {
    timestamps: true
})


export default mongoose.model('Review', orderSchema)