const db = require('mysql');
require('dotenv').config();

const connection = db.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.PORT || 3306,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});


connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connection as id ' + connection.threadId);
});

module.exports = connection;