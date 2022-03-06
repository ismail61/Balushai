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
        type: mongoose.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    quantity_hipped: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        required: true
    }
});


// Delivery information
const AddressSchema = new mongoose.Schema({
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
    method: stringRequired,
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
//User Details 
const UserInformationSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Types.ObjectId,
        required: true
    }
})


/********************
 * Order Schema here
 ********************/
const orderSchema = mongoose.Schema({
    products: [ProductSchema],
    voucher_code: String,
    subtotal: numberRequired,
    shipping_fee: numberRequired,
    shipping_fee_promotion: numberRequired,
    vat: Number,
    total: numberRequired,
    payment_information: PaymentInformationSchema,
    user_information: UserInformationSchema,
    billing_address: AddressSchema,
    shipping_address: AddressSchema,
    user_order_status: {
        type: String,
        default: 'PENDING',
        enum: ['PENDING', 'PROCESSING', 'SHIPPED', 'DELIVERED', 'CANCELED']
    },
    vendor_order_status: {
        type: String,
        default: 'PENDING',
        enum: ['PENDING', 'READY_TO_SHIP', 'SHIPPED', 'DELIVERED', 'CANCELLED' , 'RETURNED' , 'DELIVERY_FAILED']
    },
    provider: String,
    tracking_number: String,
    invoice_number: Number,
    estimate_delivery_time: Date,
    ship_on_time: Date,
    printed: {
        type: Boolean,
        default: false
    },
    cancellation_reasons:String,
    reviews : {
        type: mongoose.Types.ObjectId,
        // required: true,
        ref:'Review'
    }
}, {
    timestamps: true
})


export default mongoose.model('Order', orderSchema)