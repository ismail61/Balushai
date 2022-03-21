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
    default_billing_address: {
        type: Boolean,
        default: false
    },
    default_shipping_address: {
        type: Boolean,
        default: false
    }
})

const CustomerChat = new mongoose.Schema({
        vendor_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Vendor',
        },
        messages: [
            {
                _id: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Message',
                }
            }
        ]
    })

const customerSchema = new mongoose.Schema({
    name: { // name means first name and last name
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        unique: true,
        index: true,
    },
    phone: {
        type: Number,
        required: true,
        unique: true,
        index: true,
        trim: true,
    },
    //addresses 
    address: [AddressSchema],
    password: {
        type: String,
        required: true,
        trim: true,
    },
    token: { // Track jwt token
        type: String,
        index: true
    },
    orders: [
        {
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Order',
            },
        }
    ],
    reviews: [
        {
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Review',
            },
        }
    ],
    image: {
        url: String,
        public_id: String
    },
    followed_stores: [
        {
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Vendor',
            },
        }
    ],
    vouchers: [{
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Voucher',
        },
    }],
    chat: [CustomerChat]
}, {
    toJSON: {
        transform(doc, ret) {
            delete ret.password,
                delete ret.__v,
                delete ret.createdAt,
                delete ret.updatedAt
        }
    },
    timestamps: true
});

customerSchema.index({ email: 1, phone: 1 })

export default mongoose.model("Customer", customerSchema);