import mongoose from "mongoose";

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
const ProductSchema = new mongoose.Schema({
    product_id: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
        index: true
    },
    vendor_id: {
        type: Schema.Types.ObjectId,
        ref: 'Vendor',
        required: true,
        index: true
    },
    quantity: {
        type: Number,
        required: true,
        max: 5
    },
    price: {
        type: Number,
        required: true
    }
});


// Delivery information
const AddressSchema = mongoose.Schema({
    full_name: stringRequired,
    phone_number: numberRequired,
    region: stringRequired,
    city: stringRequired,
    area: stringRequired,
    address: stringRequired,
    effective_delivery_label: {
        type: String,
        enum: ['OFFICE', 'HOME'],
        default: 'HOME'
    },
})


// Payment information schema
const PaymentInformationSchema = new mongoose.Schema({
    amount: numberRequired,
    method: stringRequired,// Baksh  or COD-> Cash on Delivery
    status: {
        type: String,
        enum: ['PENDING', 'PAID', 'UNPAID', 'FAILED'],
        default: 'UNPAID'
    },
    /* card: {
        brand: String,
        number : Number
        expirationMonth: Number,
        expirationYear: Number,
        cvv: Number
    } */

})
/********************
 * Order Schema here
 ********************/
const orderSchema = mongoose.Schema({
    products: [ProductSchema],
    /* quantity_shipped: {
        type: Number,
        default: 0
    }, */

    voucher_code: String,
    subtotal: numberRequired,
    shipping_fee: numberRequired,
    shipping_fee_promotion: numberRequired,
    vat: Number,
    total: numberRequired,
    payment_information: PaymentInformationSchema,
    user_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    billing_address: AddressSchema,
    shipping_address: AddressSchema,
    user_order_status: {
        type: String,
        default: 'PAYMENT_PENDING',
        enum: ['PAYMENT_PENDING', 'PROCESSING', 'SHIPPED', 'DELIVERED', 'CANCELED', 'DELIVERY_FAILED']
    },
    vendor_order_status: {
        type: String,
        default: 'PENDING',
        enum: ['PENDING', 'READY_TO_SHIP', 'SHIPPED', 'DELIVERED', 'CANCELLED', 'RETURNED', 'DELIVERY_FAILED']
    },
    provider: String,
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
    reviews: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Review'
    }
}, {
    timestamps: true
})



export default mongoose.model('Order', orderSchema)