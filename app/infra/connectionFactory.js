var mysql = require('mysql');
function createDBConnection(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'node'
    });
}

//wrapper
module.exports = function(){
    return createDBConnection
}