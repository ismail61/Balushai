import { Category } from "../../mongodb/admin";

// Create category service
export const createCategory = async (data) => {
    try {
        return await new Category(data).save()
    } catch (err) {
        console.log(err)
        globalErrorHandler(err)
    }
}


// Update single category service
export const updateCategory = async (query, data) => {
    try {
        return await Category.findOneAndUpdate(query, data, { new: true });
    } catch (err) {
        console.log(err);
    }
}


// Get all category service
export const getAllCategory = async (query) => {
    try {
        const categories = await Category.find(query);
        if (!categories) return [];
        return nestedCategories(categories);
    } catch (err) {
        console.log(err);
    }
}

// Get all top menu category service
export const getAllTopMenuCategory = async (query) => {
    try {
        const categories = await Category.find(query);
        if (!categories) return [];
        return nestedCategories(categories);
    } catch (err) {
        console.log(err);
    }
}

// Get all home page category service
export const getAllHomePageCategory = async (query) => {
    try {
        const categories = await Category.find(query);
        if (!categories) return [];
        return nestedCategories(categories);
    } catch (err) {
        console.log(err);
    }
}

// Get all published category service
export const getAllPublishedCategory = async (query) => {
    try {
        const categories = await Category.find(query);
        if (!categories) return [];
        return nestedCategories(categories);
    } catch (err) {
        console.log(err);
    }
}

// Get all Product
export const getAllProduct = async (query) => {
    try {
        return await Category.find(query).select('products -_id').populate('products');
    } catch (err) {
        console.log(err);
    }
}

function nestedCategories(categories, parentId = null) {
    const categoryList = [];
    let category;
    if (parentId == null) {
        category = categories.filter(cat => cat.parent_id == null);
    } else {
        category = categories.filter(cat => String(cat.parent_id) == String(parentId));
    }

    for (let cate of category) {
        categoryList.push({
            _id: cate._id,
            name: cate.name,
            slug: cate.slug,
            children: nestedCategories(categories, cate._id)
        })
    }
    return categoryList;
}

export const singleNestedCategories = async (id) => {
    const categoryList = [];

    const categories = await Category.find({});
    if (!categories) return [];

    const cate = await Category.findOne({ _id: id })
    categoryList.push({
        _id: cate._id,
        name: cate.name,
        slug: cate.slug,
        children: nestedCategories(categories, cate._id)
    })

    return categoryList;
}
