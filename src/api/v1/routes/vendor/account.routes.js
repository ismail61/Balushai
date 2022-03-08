import { accountController } from "../../controllers/vendor";
import { tryCatchHandle } from "../../utils";

function accountRoutes(app) {
    //Seller Account Info
    app.get('/vendor/seller-account-info', tryCatchHandle(accountController().getSellerAccountInfo));
    app.patch('/vendor/seller-account-info' , tryCatchHandle(accountController().updateSellerAccountInfo))

    //Business Information
    app.get('/vendor/business-info', tryCatchHandle(accountController().getBusinessInfo));
    app.patch('/vendor/business-info' , tryCatchHandle(accountController().updateBusinessInfo))

    // Bank Account
    app.get('/vendor/bank-info', tryCatchHandle(accountController().getBankInfo));
    app.patch('/vendor/bank-info' , tryCatchHandle(accountController().updateBankInfo))

    // Warehouse Address
    app.get('/vendor/warehouse-address', tryCatchHandle(accountController().getWarehouseAddress));
    app.patch('/vendor/warehouse-address' , tryCatchHandle(accountController().updateWarehouseAddress))

    // Warehouse Address
    app.get('/vendor/return-address', tryCatchHandle(accountController().getReturnAddress));
    app.patch('/vendor/return-address' , tryCatchHandle(accountController().updateReturnAddress))

    //Seller Logo
    app.get('/vendor/seller-logo', tryCatchHandle(accountController().getSellerLogo));
    app.patch('/vendor/seller-logo' , tryCatchHandle(accountController().updateSellerLogo))

    //Seller Photo
    app.get('/vendor/seller-photo', tryCatchHandle(accountController().getAccountPhoto));
    app.patch('/vendor/seller-photo' , tryCatchHandle(accountController().updateAccountPhoto))

    //change Password
    app.patch('/vendor/change-password' , tryCatchHandle(accountController().changePassword))
}
export { accountRoutes };