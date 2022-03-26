import mongoose from "mongoose"

// Number type & required
const NumberRequired = {
    type: Number,
    required: true
}
// String type & required
const StringRequired = {
    type: String,
    required: true
}

// Otp Schema here
const phoneOtpSchema = mongoose.Schema({
    phone: {
        ...NumberRequired,
        index: true
    },
    otp: {
        ...StringRequired,
        index: true
    },
    expire_time: Date
}, {
    timestamps: false,
})

phoneOtpSchema.index({ phone: 1, otp: 1 });

export default mongoose.model('Otp', phoneOtpSchema);