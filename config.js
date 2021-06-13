module.exports = {
    api: {
        port: process.env.API_PORT || 3000,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'notasecret!',
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'remotemysql.com',
        user: process.env.MYSQL_USER || 'xisA6pH12d',
        password: process.env.MYSQL_PASS || 'TMUYjzbzUo',
        database: process.env.MYSQL_DB || 'xisA6pH12d',
    },
}