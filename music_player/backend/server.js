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

// Front end form is sending file PATHS, need to configure them to send actual data.
// Need validation
app.post("/submitSong", (req, res, next) => {

    const form = new formidable.IncomingForm();

    const appendSongPath = "/public/static/Music/";
    const appendImgPath = "/public/static/Images/";

    form.parse(req, (err, fields, files) => {
        console.log("files: " + files)

        let oldPath = files.songFile;
        console.log("oldPath: " + oldPath);
        let newPath = path.join(__dirname, "..", appendSongPath, oldPath);
        console.log("newPath: " + newPath);
        let rawSongData = fs.readFileSync(oldPath);
        console.log("rawSongData: " + rawSongData);


        fs.writeFile(newPath, rawSongData, (err) => {
            if (err) console.log(err);
            return res.send("Successfully uploaded!");
        })
    });
})
  /*
    const songName = req.body.songName;
    const songFile = req.body.songFile;
    const songImage = req.body.songImage;
    const artistID = req.body.artistID;

    res.send(`Recieved: songName - ${songName}, songFile - ${songFile}, songImage - ${songImage}, artistID - ${artistID}`)

    const appendSongPath = "/public/static/Music/";
    const appendImgPath = "/public/static/Images/";
    const fs = require("node:fs");
    
    fs.writeFile(path.join(__dirname, "..", appendSongPath, songFile), songFile, err => {
        if (err != null) 
            console.log(err);
        return;
    });
    fs.writeFile(path.join(__dirname, "..", appendImgPath, songImage), songImage, err => {
        if (err != null) 
            console.log(err);
        return;
    });

    // There is surely a better way to do this, consider procedures
    let sql = `INSERT INTO songs (songName, songPath, imgPath, artistID)` +
              ` VALUES (\"${songName}\",` +
                       `\"${songFile}\",` +
                       `\"${songImage}\",` +
                       `\"${artistID}\")`;
    pool.query(sql, function (error, results, fields) {
        if (error) throw error;
    });
    */

app.delete("/api/delete/:songId", (req, res) => {
    const { songId } = req.params;
    let queryVal = "DELETE FROM songs WHERE songID = ?";
    pool.query(query, [id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send("An error occurred");
        } else if (result.affectedRows === 0) {
            res.status(404).send("Resource not found");
        } else {
            res.status(200).send("Resource deleted successfully");
        }
    });
});

app.get('/api/songs', (req, res) => {
    let queryVal = "SELECT s.songID, + s.songName,s.songPath,s.imgPath,a.artistID,a.artistName FROM songs AS s INNER JOIN artists AS a ON s.artistID = a.artistID;"
    pool.query(queryVal, (err, rows) => {
        if (err) throw err;

        console.log("Data recieved from database");
        console.log(rows);
        res.json(rows);
    });
});


app.listen("8080", () => {
    console.log("Server is listening on port 8080");
});