import { Order, Review } from "../../mongodb/common";
import { Customer } from "../../mongodb/customer";
import { Product, Vendor } from "../../mongodb/vendor";
import { globalErrorHandler } from "../../utils";

export const createCustomerReview = async (user_id, data, res) => {
    try {
        const { product_id, order_id, vendor_id } = data;
        const newReview = await new Review(data);
        const savedReview = await newReview.save();
        await pushCustomerReviews(user_id, newReview._id);
        await pushVendorReviews(vendor_id, newReview._id);
        await pushProductReviews(product_id, newReview._id);
        await pushOrderReview(order_id, newReview._id);
        return savedReview;
    } catch (err) {
        console.log(err)
        globalErrorHandler(err, res);
    }
}

const pushCustomerReviews = async (user_id, review_id) => {
    let reviewsArray = await Customer.findOne({ _id: user_id }).select('reviews -_id') || [];
    const { reviews } = reviewsArray;
    reviews?.push({ _id: review_id });
    await Customer.findOneAndUpdate({ _id: user_id }, { reviews });
}

const pushVendorReviews = async (vendor_id, review_id) => {
    let reviewsArray = await Vendor.findOne({ _id: vendor_id }).select('reviews -_id') || [];
    const { reviews } = reviewsArray;
    reviews?.push({ _id: review_id });
    await Vendor.findOneAndUpdate({ _id: vendor_id }, { reviews });
}

const pushProductReviews = async (product_id, review_id) => {
    let reviewsArray = await Product.findOne({ _id: product_id }).select('reviews -_id') || [];
    const { reviews } = reviewsArray;
    reviews?.push({ _id: review_id });
    await Product.findOneAndUpdate({ _id: product_id }, { reviews });
}

const pushOrderReview = async (order_id, review_id) => {
    await Order.findOneAndUpdate({ _id: order_id }, { review_id });
}

export const replyVendorReview = async (query, data, res) => {
    try {
        return await Review.findOneAndUpdate(query, { $set: data })
    } catch (err) {
        console.log(err)
        globalErrorHandler(err, res);
    }
}

export const reportVendorReview = async (query, data, res) => {
    try {
        return await Review.findOneAndUpdate(query, { $set: data })
    } catch (err) {
        console.log(err)
        globalErrorHandler(err, res);
    }
}