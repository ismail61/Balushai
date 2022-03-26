import validator from 'validator'
import { createBrand, deleteBrand, getAllBrands, getBrand } from "../../services/admin";
import { error } from "../../utils";
import { brandValidation } from "../../validations";

const brandController = () => {
    return {


        // Create a brand
        createBrand: async (req, res) => {

            const validation = await brandValidation(req.body);
            //console.log(validation.error)
            if (validation.error) return error().resourceError(res, validation.error?.details[0].message, 422);

            const { name } = req.body;

            const addedBrand = await createBrand({
                name: validator.escape(name)
            })
            res.status(200).json(addedBrand);
        },

        // Get all brands
        getAllBrands: async (req, res) => {
            const brands = await getAllBrands()
            res.status(200).json(brands)
        },

        // Get a single brand
        getSingleBrand: async (req, res) => {
            const brand = await getBrand({ _id: req.params?.id })
            if (!brand) return error().resourceError(res, 'Sorry! This brand doest not exists or something wrong', 422);
            res.status(200).json(brand)
        },

        // Delete a brand
        deleteBrand: async (req, res) => {
            const deletedBrand = await deleteBrand({ _id: req.params?.id });
            if (!deletedBrand) return error().resourceError(res, 'Sorry! This brand doest not exists or something wrong', 422);
            res.status(200).json(deletedBrand)
        }


    }
}

export { brandController }