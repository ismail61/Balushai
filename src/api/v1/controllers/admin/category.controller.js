import slugify from "slugify";
import { createCategory, getAllCategory, singleNestedCategories } from "../../services/admin";
import { error } from "../../utils";
import { categoryValidation } from "../../validations";

const categoryController = () => {
    return {

        // create a category
        createCategory: async (req, res) => {

            //console.log(req.body)
            const validation = categoryValidation(req.body);
            //console.log(validation.error)
            if (validation.error) return error().resourceError(res, validation.error?.details[0].message, 422);

            const { name } = req.body;
            const slug = slugify(name);

            const savedCategory = await createCategory({
                ...req.body,
                slug
            }, res)

            res.status(201).json(savedCategory);
        },

        // Find single category by ID 
        getSingleCategory: async (req, res) => {
            // Get single category from db
            // const category = await getSingleCategory(req.params.id, res)
            const category = await singleNestedCategories(req.params.id, res)
            res.status(200).json(category)
        },

        // Get all category
        getAllCategory: async (req, res) => {
            // Get all category form db
            const categories = await getAllCategory(res)
            res.status(200).send(categories)
        },
    }
}

export { categoryController }