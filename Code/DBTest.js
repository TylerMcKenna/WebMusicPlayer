function slay() {
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123"
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