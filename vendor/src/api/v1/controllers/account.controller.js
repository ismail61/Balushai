import { getVendorAccountLogo, getVendorBankInfo, getVendorBusinessInfo, getVendorReturnAddress, getVendorSellerAccountInfo, getVendorWarehouseAddress, updateSellerAccountInfo, updateVendorBankInfo, updateVendorBusinessInfo, updateVendorReturnAddress, updateVendorWarehouseAddress } from "../services";
import { error, validatorEscape } from "../utils";
import { bankInfoValidation, businessInfoValidation, returnAddressValidation, sellerAccountInfoValidation, wareHouseAddressValidation } from "../validations";

function accountController() {
    return {
        getSellerAccountInfo: async (req, res) => {
            const vendor = await getVendorSellerAccountInfo({ _id: req.user?._id });
            res.status(200).json(vendor);
        },
        updateSellerAccountInfo: async (req, res) => {

            //const { name,phone} = req.body;

            const validation = sellerAccountInfoValidation(req.body);
            if (validation.error) return error().resourceError(res, validation.error?.details[0].message, 422);

            //malicious data refactor
            const refactor_data = await validatorEscape(req.body);

            const updatedVendor = await updateSellerAccountInfo(req.user?._id, refactor_data);
            res.status(200).json(updatedVendor?.seller_account);
        },
        getBusinessInfo: async (req, res) => {
            const vendor = await getVendorBusinessInfo({ _id: req.user?._id });
            res.status(200).json(vendor);
        },
        updateBusinessInfo: async (req, res) => {

            const { document } = req.body;

            const validation = businessInfoValidation(req.body);
            if (validation.error) return error().resourceError(res, validation.error?.details[0].message, 422);

            if (req.fileExtensionValidationError) return error().resourceError(res, 'Only .png, .jpg and .jpeg format allowed!', 415)
            if (req.file?.size >= 3 * 1024 * 1024) return error().resourceError(res, 'Image size mus lower than 3 MB', 409)

            //image upload if seller provide any image for document
            if (req.file) {
                const image_upload = await cloudinary.v2.uploader.upload(req.file?.path, { folder: 'balushai/vendor/documents', use_filename: true })
                if (!image_upload?.url) return error().resourceError(res, 'Image Saved Failed . Please try again', 500)
                document = image_upload?.url
            }

            //malicious data refactor
            const refactor_data = await validatorEscape(req.body);

            const updatedVendor = await updateVendorBusinessInfo(req.user?._id, refactor_data);
            res.status(200).json(updatedVendor?.business_information);
        },
        getBankInfo: async (req, res) => {
            const vendor = await getVendorBankInfo({ _id: req.user?._id });
            res.status(200).json(vendor);
        },
        updateBankInfo: async (req, res) => {

            const { cheque_copy } = req.body;

            const validation = bankInfoValidation(req.body);
            if (validation.error) return error().resourceError(res, validation.error?.details[0].message, 422);

            if (req.fileExtensionValidationError) return error().resourceError(res, 'Only .png, .jpg and .jpeg format allowed!', 415)
            if (req.file?.size >= 3 * 1024 * 1024) return error().resourceError(res, 'Image size mus lower than 3 MB', 409)

            //image upload if seller provide any image for bank cheque Book
            if (req.file) {
                const image_upload = await cloudinary.v2.uploader.upload(req.file?.path, { folder: 'balushai/vendor/documents', use_filename: true })
                if (!image_upload?.url) return error().resourceError(res, 'Image Saved Failed . Please try again', 500)
                cheque_copy = image_upload?.url
            }

            //malicious data refactor
            const refactor_data = await validatorEscape(req.body);

            const updatedVendor = await updateVendorBankInfo(req.user?._id, refactor_data);
            res.status(200).json(updatedVendor?.bank_account);
        },
        getWarehouseAddress: async (req, res) => {
            const vendor = await getVendorWarehouseAddress({ _id: req.user?._id });
            res.status(200).json(vendor);
        },
        updateWarehouseAddress: async (req, res) => {

            //const { name,address,phone,city_or_town,country, division, city, post_code } = req.body;

            const validation = wareHouseAddressValidation(req.body);
            if (validation.error) return error().resourceError(res, validation.error?.details[0].message, 422);

            //malicious data refactor
            const refactor_data = await validatorEscape(req.body);

            const updatedVendor = await updateVendorWarehouseAddress(req.user?._id, refactor_data);
            res.status(200).json(updatedVendor?.warehouse_address);
        },
        getReturnAddress: async (req, res) => {
            const vendor = await getVendorReturnAddress({ _id: req.user?._id });
            res.status(200).json(vendor);
        },
        updateReturnAddress: async (req, res) => {

            //const { name,address,phone,city_or_town,country, division, city, post_code } = req.body;

            const validation = returnAddressValidation(req.body);
            if (validation.error) return error().resourceError(res, validation.error?.details[0].message, 422);

            //malicious data refactor
            const refactor_data = await validatorEscape(req.body);

            const updatedVendor = await updateVendorReturnAddress(req.user?._id, refactor_data);
            res.status(200).json(updatedVendor?.return_address);
        },
        getSellerLogo: async (req, res) => {
            const vendor = await getVendorAccountLogo({ _id: req.user?._id });
            res.status(200).json(vendor);
        },
        updateSellerLogo: async (req, res) => {

            if (req.fileExtensionValidationError) return error().resourceError(res, 'Only .png, .jpg and .jpeg format allowed!', 415);
            if (req.file?.size >= 3 * 1024 * 1024) return error().resourceError(res, 'Image size mus lower than 3 MB', 409);

            const image_upload = await cloudinary.v2.uploader.upload(req.file?.path, { folder: 'balushai/vendor/logo', use_filename: true });
            if (!image_upload?.url) return error().resourceError(res, 'Image Saved Failed . Please try again', 500);

            await updateVendorAccountLogo(req.user?._id, image_upload?.url);

            res.status(200).json({
                message: 'successful',
                url: image_upload?.url
            });

        }
    }
}
export { accountController };