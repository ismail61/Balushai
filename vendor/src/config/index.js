const { PORT, DB_URL , JWT_SECRET_KEY } = process.env
const config = {
    app: {
        port: parseInt(PORT)
    },
    db: {
        url: DB_URL
    },
    jwt: {
        key: JWT_SECRET_KEY
    }
};

export { config }