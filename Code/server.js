const { error } = require('console');
const path = require('path');

const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

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

    connection.query("SELECT * FROM musicdatabase.songs", (err, rows) => {
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