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

//PriceSchema
const priceSchema = mongoose.Schema({
    price: NumberRequired,
    special_price: Number,
    offer_price: Number
}, { _id: false })

// variant stock price combine schema
const variant_stock_priceSchema_with_color_and_size = mongoose.Schema({
    colors: [{
        color_family: StringRequired,
        image: [{
            url: String,
            public_id: String
        }],
        sizes: [{
            size: String,
            pricing: priceSchema,
            quantity: NumberRequired,
            seller_sku: {
                type: String,
                maxLength: 100,
                index: true,
                unique: true
            },
            free_items: String
        }],
        availability: {
            type: Boolean,
            default: true
        }
    }],
}, { _id: false })

// variant stock price combine schema
const variant_stock_priceSchema_with_color = mongoose.Schema({
    colors: [{
        availability: {
            type: Boolean,
            default: true
        },
        color_family: StringRequired,
        image: [{
            url: String,
            public_id: String
        }],
        pricing: priceSchema,
        quantity: NumberRequired,
        seller_sku: {
            type: String,
            maxLength: 100,
            index: true,
            unique: true
        },
        free_items: String,
    }],
}, { _id: false })

// variant stock price combine schema
const variant_stock_priceSchema_without_color = mongoose.Schema({
    variants: String,
    image: [{
        url: String,
        public_id: String
    }],
    availability: {
        type: Boolean,
        default: true
    },
    pricing: priceSchema,
    quantity: NumberRequired,
    seller_sku: {
        type: String,
        maxLength: 100,
        index: true,
        unique: true
    },
    free_items: String
}, { _id: false })



// Product Schema here
const productSchema = mongoose.Schema({
    product_name: {
        ...StringRequired,
        min: 10,
        maxLength: 255,
        unique: true,
        index: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    slug: {
        ...StringRequired,
        unique: true,
        index: true
    },
    video_url: String,
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand',
        required: true
    },
    short_description: StringRequired,
    long_description: {
        description: String,
        image: [{
            url: String,
            public_id: String
        }],
    },
    whats_in_the_box: {
        ...StringRequired,
        maxLength: 255
    },
    variant_stock_price_with_color_and_size: [variant_stock_priceSchema_with_color_and_size],
    variant_stock_price_with_color: [variant_stock_priceSchema_with_color],
    variant_stock_price_without_color: [variant_stock_priceSchema_without_color],
    warranty_type: StringRequired,
    warranty_period: String,
    warranty_policy: String,
    package_weight: NumberRequired,
    package_dimensions: {
        length: NumberRequired,
        width: NumberRequired,
        height: NumberRequired,
    },
    dangerous_goods: String,
    /* vat: {
        percentage: {
            type: Number,
            min: 0,
        }
    }, */
    status: {
        type: String,
        enum: ['APPROVED', 'PENDING', 'SUSPENDED'],
        default: 'PENDING',
        index: 1
    },
    suspended_reasons: String,
    is_deleted: {
        type: Boolean,
        default: false,
        index: true
    },
    is_active: {
        type: Boolean,
        default: false,
        index: true
    },
    rating: {
        type: Number,
        default: 0,
        index: true
    },
    vendor_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vendor',
        required: true,
        index: true
    },
    orders: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Order',
        }
    ],
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review',
        }
    ],
    questions_and_answers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'QA',
        }
    ]

}, {
    timestamps: true,
})

productSchema.index({ vendor_id: 1, is_deleted: 1, is_active: 1, slug: 1, status: 1 })


export default mongoose.model('Product', productSchema)