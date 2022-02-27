import jwt from 'jsonwebtoken'
import { config } from '../../../config'
import { findVendorUsingIdAndToken } from '../services';

export const vendorAuthentication = async (req, res, next) => {
    const token =
        req.body.token || req.query.token || req.headers["x-access-token"] || req.header('Authorization');

    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    try {
        const verify_token = await jwt.verify(token, config.jwt.key);
        const vendor = await findVendorUsingIdAndToken({ _id: verify_token._id, token: verify_token.verifyToken })
        if (!vendor) return res.json({ err: "Invalid Token" });
        if (vendor?.activated === false) return res.json({ err: 'Your account has not been activated. Please contact Admin or Administrator' })
        req.user = verify_token;
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
    return next();
};