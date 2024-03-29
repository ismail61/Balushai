import jwt from 'jsonwebtoken'
import { config } from '../../../../config'
import { findVendorUsingIdAndToken } from '../../services/vendor';

export const vendorAuthenticationWithoutActive = async (req, res, next) => {
    const BearerToken =
        req.body.token || req.query.token || req.headers["x-access-token"] || req.header('Authorization');

    if (!BearerToken) {
        return res.status(403).send("A token is required for authentication");
    }
    try {
        const token = req.headers.authorization.split(' ')[1];
        const verify_token = jwt.verify(token, config.jwt.key);
        const vendor = await findVendorUsingIdAndToken({ $and: [{ _id: verify_token._id }, { token: verify_token?.verifyToken }] })
        if (!vendor) return res.status(401).send("Invalid Token");
        //if (vendor?.is_active === false) return res.json({ err: 'Your account has not been activated. Please contact Admin or Administrator' })
        req.user = verify_token;
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
    return next();
};