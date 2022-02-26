import bcrypt from 'bcrypt'
export default (password) => {
    return await bcrypt.hash(password, 10)
}