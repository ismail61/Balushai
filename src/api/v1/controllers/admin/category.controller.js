import slugify from "slugify";
import cloudinary from 'cloudinary';
import { createCategory, getAllCategory, getAllHomePageCategory, getAllProduct, getAllPublishedCategory, getAllTopMenuCategory, singleNestedCategories, updateCategory } from "../../services/admin";
import { error, objectValidatorEscape } from "../../utils";
import { categoryValidation } from "../../validations";

const categoryController = () => {
    return {

        // create a category
        createCategory: async (req, res) => {

            //console.log(req.body)
            const validation = categoryValidation(req.body);
            //console.log(validation.error)
            if (validation.error) return error().resourceError(res, validation.error?.details[0].message, 422);

            let image;
            if (req?.file) {
                if (req.fileExtensionValidationError) return error().resourceError(res, 'Only .png, .jpg and .jpeg format allowed!', 415);
                if (req.file?.size >= 3 * 1024 * 1024) return error().resourceError(res, 'Image size mus lower than 3 MB', 409);

                const image_upload = await cloudinary.v2.uploader.upload(req.file?.path, { folder: 'balushai/admin/category', use_filename: true });
                if (!image_upload?.secure_url) return error().resourceError(res, 'Image Saved Failed . Please try again', 500);

                image = {
                    public_id: image_upload?.public_id,
                    url: image_upload?.secure_url
                }
            }

            const { name } = req.body;

            const refactor_data = objectValidatorEscape(req.body);

            const savedCategory = await createCategory({
                ...refactor_data,
                slug: slugify(refactor_data?.name)?.toLowerCase(),
                image
            })

            res.status(201).json(savedCategory);
        },

        // Find single category by ID 
        getSingleCategory: async (req, res) => {
            // Get single category from db
            const category = await singleNestedCategories(req.params.id);
            if (!category[0]) return error().resourceError(res, 'Sorry! This category doest not exists or something wrong', 422);
            res.status(200).json(category[0])
        },

        // Get All Top Menu Category
        getAllTopMenuCategory: async (req, res) => {
            // Get all category form db
            const categories = await getAllTopMenuCategory({ $and: [{ include_in_top_menu: true }, { published: true }] })
            res.status(200).send(categories)
        },

        // Get All Home Page Category
        getAllHomePageCategory: async (req, res) => {
            // Get all category form db
            const categories = await getAllHomePageCategory({ $and: [{ show_on_home_page: true }, { published: true }] })
            res.status(200).send(categories)
        },

        // Get All Published Category
        getAllPublishedCategory: async (req, res) => {
            // Get all category form db
            const categories = await getAllPublishedCategory({ published: true })
            res.status(200).send(categories)
        },

        // Get All Category
        getAllCategory: async (req, res) => {
            // Get all category form db
            const categories = await getAllCategory({})
            res.status(200).send(categories)
        },

        // Get All Products by category ID
        getAllProductBySpecificCategory: async (req, res) => {
            // Get all category form db
            const categories = await getAllProduct({ _id: req.params.id })
            res.status(200).send(categories)
        },

        // Update Category by ID
        updateCategory: async (req, res) => {

            const { name, image } = req.body;

            const validation = categoryValidation(req.body);
            //console.log(validation.error)
            if (validation.error) return error().resourceError(res, validation.error?.details[0].message, 422);

            //image upload if seller provide any image for document
            if (req.file) {
                if (req.fileExtensionValidationError) return error().resourceError(res, 'Only .png, .jpg and .jpeg format allowed!', 415)
                if (req.file?.size >= 3 * 1024 * 1024) return error().resourceError(res, 'Image size mus lower than 3 MB', 409)

                const image_upload = await cloudinary.v2.uploader.upload(req.file?.path, { folder: 'balushai/admin/category', use_filename: true })
                if (!image_upload?.secure_url) return error().resourceError(res, 'Image Saved Failed . Please try again', 500)
                image = {
                    public_id: image_upload?.public_id,
                    url: image_upload?.secure_url
                }
            }

            const refactor_data = objectValidatorEscape(req.body);

            // Update category 
            const updatedCategory = await updateCategory({ _id: req.params.id }, {
                ...refactor_data,
                slug: slugify(name)?.toLowerCase(),
                image
            });

            if (!updatedCategory) return error().resourceError(res, 'Sorry! This category doest not exists or something wrong', 422);
            res.status(200).send(updatedCategory);
        },

        // Published Category by ID
        publishedCategory: async (req, res) => {
            // Update category 
            const updatedCategory = await updateCategory({ _id: req.params.id }, {
                published: true
            });

            if (!updatedCategory) return error().resourceError(res, 'Sorry! This category doest not exists or something wrong', 422);
            res.status(200).send(updatedCategory);
        },

        // Un Published Category by ID
        unPublishedCategory: async (req, res) => {
            // Update category 
            const updatedCategory = await updateCategory({ _id: req.params.id }, {
                published: false
            });

            if (!updatedCategory) return error().resourceError(res, 'Sorry! This category doest not exists or something wrong', 422);
            res.status(200).send(updatedCategory);
        },

        // Show Home Page Category by ID
        showHomePageCategory: async (req, res) => {
            // Update category 
            const updatedCategory = await updateCategory({ _id: req.params.id }, {
                show_on_home_page: true
            });

            if (!updatedCategory) return error().resourceError(res, 'Sorry! This category doest not exists or something wrong', 422);
            res.status(200).send(updatedCategory);
        },

        // Hide Home Page Category by ID
        hideHomePageCategory: async (req, res) => {
            // Update category 
            const updatedCategory = await updateCategory({ _id: req.params.id }, {
                show_on_home_page: false
            });

            if (!updatedCategory) return error().resourceError(res, 'Sorry! This category doest not exists or something wrong', 422);
            res.status(200).send(updatedCategory);
        },

        // Show Top Menu Category by ID
        showTopMenuCategory: async (req, res) => {
            // Update category 
            const updatedCategory = await updateCategory({ _id: req.params.id }, {
                include_in_top_menu: true
            });

            if (!updatedCategory) return error().resourceError(res, 'Sorry! This category doest not exists or something wrong', 422);
            res.status(200).send(updatedCategory);
        },

        // Hide Top Menu Category by ID
        hideTopMenuCategory: async (req, res) => {
            // Update category 
            const updatedCategory = await updateCategory({ _id: req.params.id }, {
                include_in_top_menu: false
            });

            if (!updatedCategory) return error().resourceError(res, 'Sorry! This category doest not exists or something wrong', 422);
            res.status(200).send(updatedCategory);
        },
    }
}

export { categoryController }