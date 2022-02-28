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

// Order item schema
const orderItemSchema = mongoose.Schema({
    product_id: stringRequired,
    product_name: stringRequired,
    price: numberRequired,
    quantity: numberRequired,
    total_price: numberRequired 
})

// Delivery information
const delivery_informationSchema = mongoose.Schema({
    full_name: stringRequired,
    phone_number: numberRequired,
    region: stringRequired,
    city:stringRequired,
    area: stringRequired,
    address: stringRequired,
    effective_delivery_label: {
        type: String,
        enum : ['office','home'],
        default: 'home'
    },
})


// Payment information schema
const paymentInformationSchema = mongoose.Schema({
    payment_method: stringRequired,
    payment_status: {
        type: String,
        enum: ['paid', 'unpaid'],
        required: true
    }
    
})


/********************
 * Order Schema here
 ********************/
const orderSchema = mongoose.Schema({
    delivery_information: delivery_informationSchema,
    order_items: [orderItemSchema],
    voucher_code: String,
    total_items: numberRequired,
    subtotal: numberRequired,
    shipping_fee: numberRequired,
    vat: Number,
    total: numberRequired,
    paymentInformation: paymentInformationSchema
})


export default mongoose.model('Order', orderSchema)