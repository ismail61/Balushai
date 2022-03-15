import { Category } from "../../mongodb/admin"
import { globalErrorHandler } from "../../utils"

// Create category service
export const createCategory = async (data, res) => {
    try {
        return await new Category(data).save()
    } catch (err) {
        console.log(err)
        globalErrorHandler(err, res)
    }
}

// Get single category service
export const getSingleCategory = async (query , res) => {
    try {
        const category = await Category.find(query);
        if (!category) return null;
        /* if(category[0]){
            category[0].parent_id = null
        } */
        return nestedCategories(category);
    } catch (err) {
        console.log(err);
        globalErrorHandler(err, res);
    }
}

// Get all category service
export const getAllCategory = async (res) => {
    try {
        const categories = await Category.find({});
        if (!categories) return [];
        return nestedCategories(categories);
    } catch (err) {
        console.log(err);
        globalErrorHandler(err, res);
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

function singleNestedCategories(categories, parentId = null) {
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