'use strict';

import mongoose from "mongoose";

// String type & required
const StringRequired = {
    type: String,
    required: true,
};

// Number type & required
const NumberRequired = {
    type: Number,
    required: true,
};

var adminSchema = new mongoose.Schema({
    phone: NumberRequired,
    email: StringRequired,
    password: StringRequired,
    vouchers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Voucher',
    }],
    login_failed_time: {
        type: Number,
        default: 0
    },
    is_locked: { // if 3 login failure
        type: Boolean,
        default: false
    }
});

export default mongoose.model('Admin', adminSchema);