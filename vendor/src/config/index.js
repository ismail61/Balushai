const { PORT, DB_URL } = process.env
const config = {
    app: {
        port: parseInt(PORT) || 7890
    },
    db: {
        url: DB_URL
    }
};

export { config }