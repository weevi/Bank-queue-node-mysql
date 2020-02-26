require('dotenv').config();
var mysql = require("mysql");
var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("home");
})

app.get("/board", function(req, res) {
    res.render("board.ejs");
})

// var con = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: "mydb"
// });

// con.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "SELECT * FROM customers"
//     // var sql =  "CREATE TABLE customers (name VARCHAR(255), clientNo INT(255), specialist TINYINT(255) )";
//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log(result);
//     });
// });

var listener = app.listen(8888, function(){
    console.log('Listening on port ' + listener.address().port); //Listening on port 8888
});
