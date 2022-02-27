import { getVendorBusinessInfo } from "../services";

function accountController() {
    return {
        getBusinessInfo: async (req, res) => {
            console.log(req.user);
            const vendor = await getVendorBusinessInfo({ _id: req.user?._id });
            res.status(200).json(vendor);
        },
    }
}
export { accountController };