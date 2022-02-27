const mongoose = require('mongoose')

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
        type: String,
        enum : ['available','unavailable'],
        default: 'available'
    },
    stock: numberRequired,
    vendor_sku: stringRequired
})


// Product Schema here
const productSchema = mongoose.Schema({
    product_name: stringRequired,
    category: stringRequired,
    video_url: String,
    brand:stringRequired,
    short_description: stringRequired,
    long_description: stringRequired,
    whats_in_the_box: stringRequired,
    variant_stock_price: [variant_stock_priceSchema],
    warranty_type: stringRequired,
    warranty_period: String,
    warranty_policy: String,
})


module.exports = mongoose.model('product', productSchema)