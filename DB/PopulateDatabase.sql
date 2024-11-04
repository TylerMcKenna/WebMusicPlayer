DROP TABLE IF EXISTS users, artists, playlists, songs, playlist_songs;

CREATE TABLE IF NOT EXISTS users (
	userID INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(25) NOT NULL,
    email VARCHAR(25) NOT NULL,
    -- Change to hash later down the line
    userPassword VARCHAR(25) NOT NULL,
    PRIMARY KEY (userID)
);

CREATE TABLE IF NOT EXISTS artists (
	artistID INT NOT NULL AUTO_INCREMENT,
    artistName VARCHAR(25) NOT NULL,
    PRIMARY KEY (artistID)
);

CREATE TABLE IF NOT EXISTS playlists (
	playlistID INT NOT NULL AUTO_INCREMENT,
	playlistName VARCHAR(25),
    userID INT NOT NULL,
    PRIMARY KEY (playlistID),
    FOREIGN KEY (userID)
		REFERENCES Users(userID)
		ON DELETE RESTRICT 
        ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS songs (
	songID INT NOT NULL AUTO_INCREMENT,
    songName VARCHAR(50),
    songPath VARCHAR(2000),
    imgPath VARCHAR(2000),
    artistID INT NOT NULL,
    PRIMARY KEY (songID),
	FOREIGN KEY (artistID)
		REFERENCES Artists(artistID)
        ON DELETE RESTRICT
        ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS playlist_songs (
	playlistID INT NOT NULL,
	songID INT NOT NULL,
    PRIMARY KEY (playlistID, songID),
    FOREIGN KEY (playlistID)
		REFERENCES Playlists(playlistID)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
	FOREIGN KEY (songID)
		REFERENCES Songs(songID)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

INSERT INTO users (username, email, userPassword)
	VALUES ('test100', 'tester@gmail.com', 'test123')
;

INSERT INTO artists (artistName)
	VALUES ('Taylor Swift'),
		   ('Zion. T'),
           ('The Real Group'),
           ('Rachmaninoff')
;

INSERT INTO playlists (playlistName, userID)
	VALUES ('tests favorites',1),
		   ('worst songs of all time',1)
;

-- Later down the line reduce filepath to just be the mp3 name as ./..\\\\static\\\\Music\\\\ is extremely redundant
INSERT INTO songs (songName, songPath, imgPath, artistID)
	VALUES ('Shake It Off','ShakeItOff-TaylorSwift.mp3','shake-it-off.png',1),
           ('Complex','Complex-ZionT.mp3','complex.jpg',2),
           ('There Will Never Be Another You','ThereWillNeverBeAnotherYou-TheRealGroup.mp3','there-will-never-be-another-you.png',3),
           ('Prelude in G Minor','PreludeInGMinor-Rachmaninoff.mp3','prelude-in-g-minor.png',4)
;

INSERT INTO playlist_songs (playlistID, songID)
	VALUES (1,2),
		   (1,3),
           (1,4),
           (2,2)
;