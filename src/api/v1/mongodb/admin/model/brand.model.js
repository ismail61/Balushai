import mongoose from "mongoose";

var BrandSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        default: null
    },
    published: {
        type: Boolean,
        default: false
    },
});

export default mongoose.model('Brand', BrandSchema);