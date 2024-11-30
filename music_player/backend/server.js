const { error } = require('console');
const path = require('path');

const express = require("express");
const app = express();

app.use('/public', express.static(path.join(__dirname, '../public')))

const cors = require('cors');
app.use(cors());

app.use(express.urlencoded({ extended: false }));

const fs = require("fs");
const formidable = require("formidable");

//const bcrypt = require("bcrypt");

// Eventually need to remove password from here
var mysql = require("mysql");
var pool = mysql.createPool({
    connectionLimit : 10,
    host            : "127.0.0.1",
    user            : "root",
    password        : "password123",
    database        : "musicdatabase"
});

// https://www.youtube.com/watch?v=-RCnNyD0L-s => https://www.youtube.com/watch?v=-RCnNyD0L-s

app.use(express.urlencoded({ 
    extended: false,
    limit: 10000,
    parameterLimit: 2
}))


const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "../public/static/Music");
    },
    filename: function (req, file, callback) {
        const filename = file.originalname;
        callback(null, filename);
    }
})

const upload = multer({
    storage: storage,
})

app.post("/submitSong", upload.single("songFile"), (req, res) => {
    let queryVal = `INSERT INTO songs (songName, songPath, imgPath, artistID) VALUES ("${req.body.songName}", "${req.file.originalname}", null, ${req.body.artistID})`

    pool.query(queryVal, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send("An error occurred");
        } else {
            res.status(201).send("Resource created successfully");
        }
    });

})

app.delete("/api/delete/:songID", async (req, res) => {
    const songID = req.params.songID;
    
    let queryVal = "DELETE FROM songs WHERE songID = " + songID;
    
    pool.query(queryVal, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send("An error occurred");
        } else if (result.affectedRows === 0) {
            res.status(404).send("Resource not found");
        } else {
            res.status(204).send("Resource deleted successfully");
        }
    });
});

app.patch("/api/update/:songID/:songName", (req, res) => {
    const { songID, songName } = req.params;

    let queryVal = `UPDATE musicdatabase.songs SET songName = "${ songName }" WHERE songID = ${ songID }`

    pool.query(queryVal, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send("An error occurred");
        } else if (result.affectedRows === 0) {
            res.status(404).send("Resource not found");
        } else {
            res.status(200).send("Resource updated successfully");
        }
    });
})

app.get('/api/songs', (req, res) => {
    let queryVal = "SELECT s.songID, + s.songName,s.songPath,s.imgPath,a.artistID,a.artistName FROM songs AS s INNER JOIN artists AS a ON s.artistID = a.artistID;"
    pool.query(queryVal, (err, rows) => {
        if (err) throw err;

        res.json(rows);
    });
});


app.listen("8080", () => {
    console.log("Server is listening on port 8080");
});