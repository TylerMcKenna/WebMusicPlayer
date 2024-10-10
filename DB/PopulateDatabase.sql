DROP TABLE IF EXISTS users, artists, playlists, songs, playlist_songs;

CREATE TABLE users (
	userID INT NOT NULL,
    username VARCHAR(25) NOT NULL,
    email VARCHAR(25) NOT NULL,
    -- Change to hash later down the line
    userPassword VARCHAR(25) NOT NULL,
    PRIMARY KEY (userID)
);

CREATE TABLE artists (
	artistID INT NOT NULL,
    name VARCHAR(25) NOT NULL,
    PRIMARY KEY (artistID)
);

CREATE TABLE playlists (
	playlistID INT NOT NULL,
	name VARCHAR(25),
    userID INT NOT NULL,
    PRIMARY KEY (playlistID),
    FOREIGN KEY (userID)
		REFERENCES Users(userID)
);

CREATE TABLE songs (
	songID INT NOT NULL,
    name VARCHAR(50),
    path VARCHAR(2000),
    artistID INT NOT NULL,
    PRIMARY KEY (songID),
	FOREIGN KEY (artistID)
		REFERENCES Artists(artistID)
);

CREATE TABLE playlist_songs (
	playlistID INT NOT NULL,
	songID INT NOT NULL,
    PRIMARY KEY (playlistID, songID),
    FOREIGN KEY (playlistID)
		REFERENCES Playlists(playlistID),
	FOREIGN KEY (songID)
		REFERENCES Songs(songID)
);

INSERT INTO users (userID, username, email, userPassword)
	VALUES (1, 'test100', 'tester@gmail.com', 'test123')
;

INSERT INTO artists (artistID, name)
	VALUES (1,'Taylor Swift'),
		   (2,'Zion. T'),
           (3,'The Real Group'),
           (4,'Rachmaninoff')
;

INSERT INTO playlists (playlistId, name, userID)
	VALUES (1,'tests favorites',1),
		   (2,'worst songs of all time',1)
;

INSERT INTO songs (songID, name, path, artistID)
	VALUES (1,'Shake It Off','WebMusicPlayer\\Music\\ShakeItOff-TaylorSwift.mp3',1),
           (2,'Complex','WebMusicPlayer\\Music\\Complex-ZionT.mp3',2),
           (3,'There Will Never Be Another You','WebMusicPlayer\\Music\\ThereWillNeverBeAnotherYou-TheRealGroup.mp3',3),
           (4,'Prelude in G Minor','WebMusicPlayer\\Music\\PreludeInGMinor-Rachmaninoff.mp3',4)
;

INSERT INTO playlist_songs (playlistID, songID)
	VALUES (1,2),
		   (1,3),
           (1,4),
           (2,2)
;