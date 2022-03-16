import jwt from 'jsonwebtoken'
import { config } from '../../../../config'
import { findCustomerUsingIdAndToken } from '../../services/customer';

export const customerAuthentication = async (req, res, next) => {
    const BearerToken =
        req.body.token || req.query.token || req.headers["x-access-token"] || req.header('Authorization');

    if (!BearerToken) {
        return res.status(403).send("A token is required for authentication");
    }
    try {
        const token = req.headers.authorization.split(' ')[1];
        const verify_token = jwt.verify(token, config.jwt.key);
        const customer = await findCustomerUsingIdAndToken({ $and: [{ _id: verify_token._id }, { token: verify_token?.verifyToken }] })
        if (!customer) return res.status(401).send("Invalid Token");
        req.user = verify_token;
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
    return next();
};