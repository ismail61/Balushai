'use strict';

import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
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
    parent_id: {
        type: mongoose.Schema.Types.ObjectId,
        default: null
    },
    description: {
        type: String,
        default: null
    },
    image: {
        url: String,
        public_id: String
    },
    show_on_home_page: {
        type: Boolean,
        default: false
    },
    include_in_top_menu: {
        type: Boolean,
        default: false
    },
    published: {
        type: Boolean,
        default: true
    },
    commission_rate: { // like 10% but input a number like as 10
        type: Number,
        required: true
    },
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
        }
    ],
});

export default mongoose.model('Category', CategorySchema);