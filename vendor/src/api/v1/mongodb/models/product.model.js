import mongoose from "mongoose"

// String type & required
const stringRequired = {
    type: String,
    required: true
}

// Number type & required
const numberRequired = {
    type: Number,
    required: true
}

// variant stock price combine schema
const variant_stock_priceSchema = mongoose.Schema({
    variant: stringRequired,
    price: numberRequired,
    special_price: String,
    availability: {
        type: Boolean,
        default: true
    },
    stock: numberRequired,
    vendor_sku: stringRequired
})


// Product Schema here
const productSchema = mongoose.Schema({
    product_name: stringRequired,
    category: stringRequired,
    video_url: String,
    brand: stringRequired,
    short_description: stringRequired,
    long_description: stringRequired,
    whats_in_the_box: stringRequired,
    variant_stock_price: [variant_stock_priceSchema],
    warranty_type: String,
    warranty_period: String,
    warranty_policy: String,
    package_weight: String,
    package_dimensions: {
        length: String,
        width: String,
        height: String,
    },
    dangerous_goods: String,
    status: {
        type: String,
        enum: ['approved', 'pending', 'rejected'],
        default: 'pending'
    },
    is_deleted: {
        type: Boolean,
        default: false
    },
    is_active: {
        type: Boolean,
        default: true
    },
    vendor_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vendor',
        required: true
    },
    orders: [
        {
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Order',
            }
        }
    ],
    reviews: [
        {
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Review',
            }
        }
    ]

})


export default mongoose.model('product', productSchema)