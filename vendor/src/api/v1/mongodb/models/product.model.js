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
const priceSchema = new mongoose.Schema({
    price: numberRequired,
    special_price: Number,
    offer_price: Number
})

// variant stock price combine schema
const variant_stock_priceSchema_with_color_and_size = new mongoose.Schema({
    color: [{
        color_family: String,
        image: [
            {
                url: String
            }
        ],
        _size: [{
            size: mongoose.Schema.Types.Mixed,
            pricing: priceSchema,
            quantity: {
                type: Number,
                required: true
            },
            seller_sku: {
                type: String,
                maxLength: 200,
                unique: true,
                index: true
            },
            free_items: String
        }],
        availability: {
            type: Boolean,
            default: true
        }
    }],
})

// variant stock price combine schema
const variant_stock_priceSchema_with_color = new mongoose.Schema({
    color: [{
        availability: {
            type: Boolean,
            default: true
        },
        color_family: String,
        image: [
            {
                url: String
            }
        ],
        pricing: priceSchema,
        quantity: {
            type: Number,
            required: true
        },
        seller_sku: {
            type: String,
            maxLength: 200,
            unique: true,
            index: true
        },
        free_items: String,
    }],
})

// variant stock price combine schema
const variant_stock_priceSchema_without_color = new mongoose.Schema({
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
        maxLength: 200,
        unique: true,
        index: true
    },
    free_items: String
})



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
    package_weight: stringRequired,
    package_dimensions: {
        length: stringRequired,
        width: stringRequired,
        height: stringRequired,
    },
    dangerous_goods: String,
    status: {
        type: String,
        enum: ['APPROVED', 'PENDING', 'SUSPENDED'],
        default: 'PENDING'
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

}, {
    timestamps: true,
})


export default mongoose.model('Product', productSchema)