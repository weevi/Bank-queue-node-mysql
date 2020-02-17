require('dotenv').config();
var mysql = require("mysql");

var con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "mydb"
});

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     con.query("CREATE DATABASE mydb", function (err, result) {
//         if (err) throw err;
//         console.log("Database created");
//     });
// });

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "DROP TABLE customers";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});