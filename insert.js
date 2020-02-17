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

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = `
    INSERT INTO 
        customers(name, clientNo, specialist)
    VALUES
        ('Donny Joe','1001','1'),
        ('Sally Muller','2001','2'),
        ('John Duran','3001','3'),
        ('Katy Spears','4001','4'),
        ('Samanta Stukt','1002','1'),
        ('Ross Macdey','2002','2'),
        ('Laurent Michel','3002','3'),
        ('Tierry Durpal','4002','4')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("inserted");
    });
  });