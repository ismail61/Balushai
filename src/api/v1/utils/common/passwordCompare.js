
import bcrypt from 'bcrypt';
export default async (password, vendor) => {
    return await bcrypt.compare(password, vendor.password);
}