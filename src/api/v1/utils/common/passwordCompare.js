import bcrypt from 'bcrypt';

export default async (password, user) => {
    console.log(password, ' => ', user?.password)
    return await bcrypt.compare(password, user?.password);
}