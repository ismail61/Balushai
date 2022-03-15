import { error } from "../../utils";
import cloudinary from 'cloudinary';

const imageController = () => {
    return {

        // upload a image
        uploadImage: async (req, res) => {

            if (req.fileExtensionValidationError) return error().resourceError(res, 'Only .png, .jpg and .jpeg format allowed!', 415);
            if (req.file?.size >= 3 * 1024 * 1024) return error().resourceError(res, 'Image size mus lower than 3 MB', 409);

            const image_upload = await cloudinary.v2.uploader.upload(req.file?.path, { folder: 'balushai/static/photo', use_filename: true });
            if (!image_upload?.secure_url) return error().resourceError(res, 'Image Saved Failed . Please try again', 500);

            res.status(200).json({
                public_id: image_upload?.public_id,
                url: image_upload?.secure_url
            });
        },
        // delete a image
        deleteImage: async (req, res) => {
            const { public_id } = req.params;

            const response = await cloudinary.v2.uploader.destroy(public_id)
            if (response?.result !== 'ok') return error().resourceError(res, 'Image Deleted Failed . Please try again', 500);

            res.status(200).json(response);
        },
    }
}

export { imageController }