const { PORT, DB_URL , JWT_SECRET_KEY ,CLOUDINARY_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, } = process.env
const config = {
    app: {
        port: parseInt(PORT)
    },
    db: {
        url: DB_URL
    },
    jwt: {
        key: JWT_SECRET_KEY
    },
    cloudinary: {
        name: CLOUDINARY_NAME,
        api: CLOUDINARY_API_KEY,
        secret: CLOUDINARY_API_SECRET
    },
};

export { config }