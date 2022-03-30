import jwt from 'jsonwebtoken'
import { config } from '../../../../config'
import { findAdminUsingIdAndToken } from '../../services/admin';

export const adminAuthentication = async (req, res, next) => {
    const BearerToken =
        req.body.token || req.query.token || req.headers["x-access-token"] || req.header('Authorization');

    if (!BearerToken) {
        return res.status(403).send("A token is required for authentication");
    }
    try {
        const token = req.headers.authorization.split(' ')[1];
        const verify_token = jwt.verify(token, config.jwt.key);
        const admin = await findAdminUsingIdAndToken({ $and: [{ _id: verify_token._id }, { token: verify_token?.verifyToken }] })
        if(!admin) res.status(401).send("Invalid Token. Please Login Again");
        req.admin = verify_token;
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
    return next();
};