const { error } = require('console');
const path = require('path');

const express = require("express");
const app = express();

app.use('/public', express.static(path.join(__dirname, '../public')))

const cors = require('cors');
app.use(cors());

app.use(express.json());

const bcrypt = require("bcrypt");



// https://www.youtube.com/watch?v=-RCnNyD0L-s

const users = [];

app.get("/users", (req, res) => {
    res.json(users);
})

app.post("/users", async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = { name: req.body.name, password: hashedPassword } 
        users.push(user);
        res.status(201).send();
    } catch {
        res.status(500).send();
    }
})

app.post("/users/login", async (req, res) => {
    const user = users.find(user => user.name == req.body.name)
    if (user == null) {
        return res.status(400).send("cannot find user");
    }
    try {
        if(await bcrypt.compare(req.body.password, user.password)) {
            res.send("Success");
        } else {
            res.send("Not allowed");
        }
    } catch {
        res.status(500).send();
    }
}) 

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

    // let testQuery = "INSERT INTO " + user name

    let queryVal = "SELECT s.songID, + s.songName,s.songPath,s.imgPath,a.artistID,a.artistName FROM songs AS s INNER JOIN artists AS a ON s.artistID = a.artistID;"
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