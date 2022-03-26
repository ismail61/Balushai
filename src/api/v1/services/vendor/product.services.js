import mongoose from "mongoose";
import { Category } from "../../mongodb/admin";
import { Product, Vendor } from "../../mongodb/vendor";
import { globalErrorHandler } from "../../utils";

export const addProduct = async (vendor_id, data, res) => {
    try {
        const newProduct = await new Product({
            ...data,
            vendor_id: vendor_id
        });
        const savedProduct = await newProduct.save();
        await pushVendorProduct(vendor_id, newProduct._id);
        await pushCategoryProduct(savedProduct?.category, newProduct._id);
        return savedProduct;
    } catch (err) {
        console.log(err);
        globalErrorHandler(err, res);
    }
}

const pushVendorProduct = async (vendor_id, product_id) => {
    let productsArray = await Vendor.findOne({ _id: vendor_id }).select('products -_id') || [];
    const { products } = productsArray;
    products?.push(product_id);
    await Vendor.findOneAndUpdate({ _id: vendor_id }, { products });
}


const pushCategoryProduct = async (category_id, product_id) => {
    let productsArray = await Category.findOne({ _id: category_id }).select('products -_id') || [];
    const { products } = productsArray;
    products?.push(product_id);
    await Category.findOneAndUpdate({ _id: category_id }, { products });
}

export const getProduct = async (query) => {
    try {
        return await Product.findOne(query);
    } catch (err) {
        console.log(err);
    }
}

export const getProducts = async (query) => {
    try {
        return await Vendor.findOne(query).select('products -_id').populate('products').exec();
    } catch (err) {
        console.log(err)
    }
}


export const getDynamicStatusProducts = async (query, status) => {
    try {
        return await Vendor.findOne(query).select('products -_id').populate({
            "path": "products",
            "match": { "status": status }
        }).exec();
    } catch (err) {
        console.log(err)
    }
}


export const getDeActiveProducts = async (query) => {
    try {
        return await Vendor.findOne(query).select('products -_id').populate({
            "path": "products",
            "match": { is_active: true }
        }).exec();
    } catch (err) {
        console.log(err)
    }
}

export const getDeletedProducts = async (query) => {
    try {
        return await Vendor.findOne(query).select('products -_id').populate({
            "path": "products",
            "match": { is_deleted: true }
        }).exec();
    } catch (err) {
        console.log(err)
    }
}

export const updateProduct = async (query, data, res) => {
    try {
        return await Product.findOneAndUpdate(query, { $set: { ...data, status: "PENDING" } }, { new: true })
    } catch (err) {
        console.log(err);
        globalErrorHandler(err, res)
    }
}


//SKU Check 
export const sellerSKUCheck = async (body) => {
    const {
        vendor_id,
        variant_stock_price_without_color,
        variant_stock_price_with_color_and_size,
        variant_stock_price_with_color
    } = body;

    const productsObject = await Vendor.findOne({ _id: vendor_id }).select('products -_id').populate('products');
    if (productsObject?.products?.length === 0) return false;

    let sku;

    if (variant_stock_price_with_color_and_size?.length > 0) {
        variant_stock_price_with_color_and_size.forEach(variant => {
            variant?.colors?.forEach(color => {
                color?.sizes?.forEach(size => {
                    sku = size?.seller_sku;
                })
            })
        });
    }
    if (variant_stock_price_with_color?.length > 0) {
        variant_stock_price_with_color.forEach(variants => {
            variants.colors?.forEach(color => {
                sku = color?.seller_sku;
            })
        });
    }
    if (variant_stock_price_without_color) {
        sku = variant_stock_price_without_color.seller_sku;
    }
    let res;

    productsObject?.products?.forEach(product => {
        if (product.variant_stock_price_with_color_and_size?.length > 0) {
            product.variant_stock_price_with_color_and_size.forEach(variant => {
                variant?.colors?.forEach(color => {
                    color?.sizes?.forEach(size => {
                        res = (sku === size?.seller_sku) ? true : false;
                        return;
                    })
                })
            });
        } else if (product.variant_stock_price_with_color?.length > 0) {
            product.variant_stock_price_with_color.forEach(variant => {
                variant.colors?.forEach(color => {
                    res = (sku === color?.seller_sku) ? true : false;
                    return;
                })
            });
        } else {
            res = (sku === variant_stock_price_without_color?.seller_sku) ? true : false;
            return;
        }
    })
    return res;
}