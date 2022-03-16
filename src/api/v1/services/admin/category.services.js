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

// Get nested category *Recursive*
const getNestedCategoryById = (categories, _id) => {
    for (let category of categories) {
        console.log(String(category._id), "=> ", String(_id))
        if(String(category._id) == String(_id)){

            return category

        } else {
            if(category.children.length != 0){
               return getNestedCategoryById(category.children, _id)
            }
        }
    }
}

// Get single category service
export const getSingleCategory = async (_id , res) => {
    try {
        const categories = await Category.find({});
        if (!categories) return [];

        const allNestedCategories =  nestedCategories(categories);
    
        let resutl = {}
        
        for(let cat of allNestedCategories){
            if(String(cat._id) === String(_id)){
                return cat
            } else {

                if(cat.children.length !== 0){
                    const nestedCategory = getNestedCategoryById(cat.children, _id)

                    if(nestedCategories){
                        resutl = nestedCategory
                    }

                }
            }
        }
        return resutl

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