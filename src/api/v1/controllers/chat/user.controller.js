import { getAllCustomers, getAllVendors } from "../../services/chat"

const userController = () => {
    return {
        getAllVendors: async (req, res) => {
            const vendors =await getAllVendors(res)
            res.status(200).json(vendors)
        },
        getAllCustomers: async (req, res) => {
            const customers =await getAllCustomers(res)
            res.status(200).json(customers)
        }
    }
}

export { userController }