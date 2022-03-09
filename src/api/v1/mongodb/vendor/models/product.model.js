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

//PriceSchema
const priceSchema = mongoose.Schema({
    price: numberRequired,
    special_price: Number,
    offer_price: Number
}, { _id: false })

// variant stock price combine schema
const variant_stock_priceSchema_with_color_and_size = mongoose.Schema({
    colors: [{
        color_family: stringRequired,
        image: [
            {
                url: String
            }
        ],
        sizes: [{
            size: String,
            pricing: priceSchema,
            quantity: numberRequired,
            seller_sku: {
                type: String,
                maxLength: 100,
                index: true,
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
        color_family: stringRequired,
        image: [
            {
                url: String
            }
        ],
        pricing: priceSchema,
        quantity: numberRequired,
        seller_sku: {
            type: String,
            maxLength: 100,
            index: true,
        },
        free_items: String,
    }],
}, { _id: false })

// variant stock price combine schema
const variant_stock_priceSchema_without_color = mongoose.Schema({
    variants: String,
    image: [
        {
            url: String
        }
    ],
    availability: {
        type: Boolean,
        default: true
    },
    pricing: priceSchema,
    quantity: numberRequired,
    seller_sku: {
        type: String,
        maxLength: 100,
        index: true,
    },
    free_items: String
}, { _id: false })



// Product Schema here
const productSchema = mongoose.Schema({
    product_name: stringRequired,
    category: stringRequired,
    video_url: String,
    brand: stringRequired,
    short_description: stringRequired,
    long_description: {
        description: String,
        image: [
            {
                url: String
            }
        ]
    },
    whats_in_the_box: {
        ...stringRequired,
        maxLength: 255
    },
    variant_stock_price_with_color_and_size: [variant_stock_priceSchema_with_color_and_size],
    variant_stock_price_with_color: [variant_stock_priceSchema_with_color],
    variant_stock_price_without_color: [variant_stock_priceSchema_without_color],
    warranty_type: String,
    warranty_period: String,
    warranty_policy: String,
    package_weight: numberRequired,
    package_dimensions: {
        length: numberRequired,
        width: numberRequired,
        height: numberRequired,
    },
    dangerous_goods: String,
    vat: {
        percentage: {
            type: Number,
            min: 0,
        }
    },
    status: {
        type: String,
        enum: ['APPROVED', 'PENDING', 'SUSPENDED'],
        default: 'PENDING'
    },
    suspended_reasons: String,
    is_deleted: {
        type: Boolean,
        default: false,
        index:true
    },
    is_active: {
        type: Boolean,
        default: false,
        index:true
    },
    vendor_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vendor',
        required: true,
        index: true
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
    ],
    questions_and_answers: [
        {
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'QA',
            }
        }
    ]

}, {
    timestamps: true,
})

productSchema.index({ vendor_id: 1, is_deleted: 1, is_active: 1 })


export default mongoose.model('Product', productSchema)