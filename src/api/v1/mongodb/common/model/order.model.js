import mongoose from "mongoose";

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
const ProductSchema = mongoose.Schema({
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    vendor_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vendor',
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        max: 5
    },
    // product Price
    price: NumberRequired,
    description: {
        type: String,
        default: ''
    }
}, { _id: false });


// Address information
const AddressSchema = mongoose.Schema({
    full_name: StringRequired,
    phone_number: NumberRequired,
    region: StringRequired,
    city: StringRequired,
    area: StringRequired,
    address: StringRequired,
    effective_delivery_label: {
        type: String,
        enum: ['OFFICE', 'HOME'],
        default: 'HOME'
    },
}, { _id: false })


// Payment information schema
const PaymentInformationSchema = new mongoose.Schema({
    amount: NumberRequired,
    method: StringRequired,// Baksh  or COD-> Cash on Delivery
    status: {
        type: String,
        enum: ['PAID', 'UNPAID', 'FAILED'],
        default: 'UNPAID'
    },
    /* card: {
        brand: StringRequired,
        number : NumberRequired,
        expirationMonth: StringRequired,
        expirationYear: StringRequired,
        cvv: StringRequired
    } */

}, { _id: false })
/********************
 * Order Schema here
 ********************/
const orderSchema = new mongoose.Schema({
    product: [ProductSchema],
    total_price: NumberRequired,
    shipment_fee: NumberRequired,
    /*  balushai_discount: {
         type: Number,
         default: 0
     }, */
    seller_discount: {
        type: Number,
        default: 0
    },
    /* shipping_fee_discount: {
        type : Number,
        default : 0
    }, */
    grand_total: NumberRequired,
    payment_information: PaymentInformationSchema,
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    billing_address: AddressSchema,
    shipping_address: AddressSchema,
    /* user_order_status: {
        type: String,
        default: 'PENDING',
        enum: ['PENDING', 'READY_TO_SHIP', 'SHIPPED', 'DELIVERED', 'CANCELED', 'RETURNED', 'DELIVERY_FAILED']
    }, */
    status: {
        type: String,
        default: 'PENDING',
        enum: ['PENDING', 'READY_TO_SHIP', 'SHIPPED', 'DELIVERED', 'CANCELLED', 'RETURNED', 'DELIVERY_FAILED'],
        index: true
    },
    provider: {
        drop_off: String,
        delivery: String
    },
    tracking_number: String,
    invoice_number: Number,
    estimate_delivery_time: Date,
    ship_on_time: Date,
    delivered_time: Date,
    printed: {
        type: Boolean,
        default: false
    },
    cancellation_reasons: String,
    review_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review',
    },
    refunds: Number
}, {
    timestamps: true
})

orderSchema.index({ status: 1 })

export default mongoose.model('Order', orderSchema)