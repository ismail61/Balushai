import { accountController } from "../../controllers/vendor";
import {tryCatchHandle } from "../../utils";
import {vendorAuthentication} from '../../middlewares/vendor'
import {upload} from '../../middlewares/commom'

function accountRoutes(app) {
    //Seller Account Info
    app.get('/vendor/seller-account-info',vendorAuthentication, tryCatchHandle(accountController().getSellerAccountInfo));
    app.patch('/vendor/seller-account-info' ,vendorAuthentication, tryCatchHandle(accountController().updateSellerAccountInfo))

    //Business Information
    app.get('/vendor/business-info',vendorAuthentication, tryCatchHandle(accountController().getBusinessInfo));
    app.patch('/vendor/business-info' ,vendorAuthentication, upload.single('image'), tryCatchHandle(accountController().updateBusinessInfo))

    // Bank Account
    app.get('/vendor/bank-info',vendorAuthentication, tryCatchHandle(accountController().getBankInfo));
    app.patch('/vendor/bank-info' ,vendorAuthentication, upload.single('image'), tryCatchHandle(accountController().updateBankInfo))

    // Warehouse Address
    app.get('/vendor/warehouse-address',vendorAuthentication, tryCatchHandle(accountController().getWarehouseAddress));
    app.patch('/vendor/warehouse-address' ,vendorAuthentication, tryCatchHandle(accountController().updateWarehouseAddress))

    // Warehouse Address
    app.get('/vendor/return-address',vendorAuthentication, tryCatchHandle(accountController().getReturnAddress));
    app.patch('/vendor/return-address' ,vendorAuthentication, tryCatchHandle(accountController().updateReturnAddress))

    //Seller Logo
    app.get('/vendor/seller-logo',vendorAuthentication, tryCatchHandle(accountController().getSellerLogo));
    app.patch('/vendor/seller-logo' ,vendorAuthentication,upload.single('image'), tryCatchHandle(accountController().updateSellerLogo))

    //Seller Photo
    app.get('/vendor/seller-photo',vendorAuthentication, tryCatchHandle(accountController().getAccountPhoto));
    app.patch('/vendor/seller-photo' ,vendorAuthentication,upload.single('image'), tryCatchHandle(accountController().updateAccountPhoto))

    //change Password
    app.patch('/vendor/change-password' ,vendorAuthentication, tryCatchHandle(accountController().changePassword))
}
export { accountRoutes };