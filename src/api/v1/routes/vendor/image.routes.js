import { imageController } from "../../controllers/common";
import { upload } from "../../middlewares/commom";
import { vendorAuthentication } from "../../middlewares/vendor";
import { tryCatchHandle } from "../../utils";

function imageRoutes(app) {
    app.post('/image/upload', vendorAuthentication, upload.single('image'), tryCatchHandle(imageController().uploadImage));
    app.delete('/image/upload/:public_id', vendorAuthentication, tryCatchHandle(imageController().deleteImage));
}
export { imageRoutes };