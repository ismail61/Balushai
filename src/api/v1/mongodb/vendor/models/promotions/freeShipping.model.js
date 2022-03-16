
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
const freeShippingSchema = mongoose.Schema({
    name: {
        type: String,
        index: true
    },
    period: {
        period_type: {
            type: String,
            enum: ['LONG_TERM', 'SPECIFIC_PERIOD'],
            default: 'LONG_TERM'
        },
        specific_period: {
            start_date: {
                type: Date,
                required: true
            },
            end_date: {
                type: Date,
                required: true
            },
            required: () => {
                if (this.period_type === 'SPECIFIC_PERIOD') {
                    return true;
                }
                return false;
            }
        },
    },
    condition: {
        condition_type: {
            type: String,
            enum: ['NO_CONDITION', 'SHOP_ITEM_QUANTITY_ABOVE', 'SHOP_ORDER_AMOUNT_ABOVE'],
            default: 'NO_CONDITION'
        },
        quantity: {
            type: Number,
            required: () => {
                if (this.condition_type === 'SHOP_ITEM_QUANTITY_ABOVE') {
                    return true;
                }
                return false;
            }
        },
        amount: {
            type: Number,
            required: () => {
                if (this.condition_type === 'SHOP_ORDER_AMOUNT_ABOVE') {
                    return true;
                }
                return false;
            }
        }
    },
    regions: {
        region_type: {
            type: String,
            enum: ['ALL', 'SPECIFIC_REGIONS'],
            default: 'ALL'
        },
        region: [{
            name: String,
            required: () => {
                if (this.region_type === 'SPECIFIC_REGIONS') {
                    return true;
                }
                return false;
            }
        }]
    },
    delivery_option: String,
    /* apply_to: String */ // will be used in next version
}, {
    timestamps: true
})


export default mongoose.model('FreeShipment', freeShippingSchema)