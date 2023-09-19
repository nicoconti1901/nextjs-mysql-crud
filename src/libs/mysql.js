import mysql from 'serverless-mysql';

export const conn = mysql({
    config: {
        host: 'localhost',
        user: 'root',
        password: 'root1901',
        port: 3306,
        database: 'nextjsmysqlcrud'
    }
})