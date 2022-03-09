import { voucherController } from "../../../controllers/vendor";

import { tryCatchHandle } from "../../../utils";

function voucherRoutes(app) {

    app.get('/vendor/promotions/vouchers', tryCatchHandle(voucherController().getAllVouchers));
    app.get('/vendor/promotions/voucher/:id', tryCatchHandle(voucherController().getSingleVoucher));
    app.post('/vendor/promotions/create-voucher', tryCatchHandle(voucherController().createVoucher));
    app.post('/vendor/promotions/update-voucher/:id', tryCatchHandle(voucherController().updateVoucher));
}
export { voucherRoutes };