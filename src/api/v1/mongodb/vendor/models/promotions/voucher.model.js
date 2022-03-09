
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
const voucherSchema = mongoose.Schema({
    name: {
        type: String,
        index: true
    },
    start_from: Date,
    end_time: Date,
    /* voucher_type : String, */ // will be used in next version
    code: {
        ...StringRequired,
        max: 12,
        index: true
    },
    voucher_setting: {
        discount_type: {
            type: String,
            enum: ['MONEY_VALUE_VOUCHER', 'PERCENTAGE_VALUE_VOUCHER'],
            default: 'MONEY_VALUE_VOUCHER'
        },
        discount_amount: {
            type: Number,
            required: () => {
                if (this.discount_type === 'MONEY_VALUE_VOUCHER') {
                    return true;
                }
                return false;
            }
        },
        discount_amount_percentage: {
            type: Number,
            required: () => {
                if (this.discount_type === 'PERCENTAGE_VALUE_VOUCHER') {
                    return true;
                }
                return false;
            }
        },
        min_amount_to_apply: NumberRequired,
        max_amount_to_apply: {
            type: Number,
            required: () => {
                if (this.discount_type === 'PERCENTAGE_VALUE_VOUCHER') {
                    return true;
                }
                return false;
            }
        },
        total_issued_voucher: NumberRequired,
        limit_voucher_usage_for_customer: NumberRequired,
        /* apply_to: String */ // will be used in next version
    }
}, {
    timestamps: true
})


export default mongoose.model('Voucher', voucherSchema)