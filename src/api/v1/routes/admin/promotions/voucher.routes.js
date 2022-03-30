import { voucherController } from "../../../controllers/admin";
import { adminAuthentication } from "../../../middlewares/admin";
import { tryCatchHandle } from "../../../utils";

function voucherRoutes(app) {
    app.get(
        "/admin/promotions/vouchers",
        adminAuthentication,
        tryCatchHandle(voucherController().getAllVouchers)
    );
    app.get(
        "/admin/promotions/active-vouchers",
        adminAuthentication,
        tryCatchHandle(voucherController().getAllActiveVouchers)
    );
    app.get(
        "/admin/promotions/deactive-vouchers",
        adminAuthentication,
        tryCatchHandle(voucherController().getAllDeActiveVouchers)
    );
    app.get(
        "/admin/promotions/voucher/:id",
        adminAuthentication,
        tryCatchHandle(voucherController().getSingleVoucher)
    );
    app.post(
        "/admin/promotions/create-voucher",
        adminAuthentication,
        tryCatchHandle(voucherController().createVoucher)
    );
    app.patch(
        "/admin/promotions/update-voucher/:id",
        adminAuthentication,
        tryCatchHandle(voucherController().updateVoucher)
    );
    app.patch(
        "/admin/promotions/active-voucher/:id",
        adminAuthentication,
        tryCatchHandle(voucherController().activeVoucher)
    );
    app.patch(
        "/admin/promotions/deactive-voucher/:id",
        adminAuthentication,
        tryCatchHandle(voucherController().deActiveVoucher)
    );
}
export { voucherRoutes };
