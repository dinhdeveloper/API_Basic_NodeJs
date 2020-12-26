const mysql = require('mysql')

const mySqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    port:'3306',
    password:'',
    database:'baihocvolong'
})
mySqlConnection.connect();

module.exports = mySqlConnection