var about;   
function slay() {
    about = document.getElementById("about");
    about.style.color = 'blue';
    console.log("test");

    var mysql = require('mysql');

    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "password123"
    });

    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
    });
}