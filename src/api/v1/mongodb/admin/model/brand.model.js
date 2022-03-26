'use strict';

import mongoose from "mongoose";

var BrandSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: String,
});

export default mongoose.model('Brand', BrandSchema);