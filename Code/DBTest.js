function slay() {
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost:3306",
    user: "root",
    password: "password123"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected");
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
    });
});
}