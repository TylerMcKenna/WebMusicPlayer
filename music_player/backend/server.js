const { error } = require('console');
const path = require('path');

const express = require("express");
const app = express();

app.use('/public', express.static(path.join(__dirname, '../public')))

const cors = require('cors');
app.use(cors());

app.get('/api/songs', (req, res) => {
    const mysql = require("mysql");
    const connection = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        database: "musicdatabase",
        password: "password123"
    });

    connection.connect((err => {
        if (err) {
            console.log("Error connecting to database");
            return;
        }
        console.log("Connection established");
    }));

    let queryVal = "SELECT s.songID,s.songName,s.songPath,s.imgPath,a.artistID,a.artistName FROM songs AS s INNER JOIN artists AS a ON s.artistID = a.artistID;"
    connection.query(queryVal, (err, rows) => {
        if (err) throw err;

        console.log("Data recieved from database");
        console.log(rows);
        res.json(rows);
    });

    connection.end(err => {});
});

app.listen("8080", () => {
    console.log("Server is listening on port 8080");
});