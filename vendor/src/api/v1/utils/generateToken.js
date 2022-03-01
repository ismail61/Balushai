import jwt from 'jsonwebtoken'
import { config } from '../../../config'

export default (user, verifyTokenTracker) => {
    const ONE_DAY = '24h'
    return jwt.sign({
        _id: user._id,
        verifyToken: verifyTokenTracker
    }, config.jwt.key, {
        expiresIn: ONE_DAY
    })
}