const { PORT, DB_URL , JWT_SECRET_KEY, CLOUDE_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env
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
        cloud_name: CLOUDE_NAME, 
        api_key: CLOUDINARY_API_KEY, 
        api_secret: CLOUDINARY_API_SECRET
    }
};

export { config }