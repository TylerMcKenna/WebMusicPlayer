import { useState } from "react"; 
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // icons for play and pause
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"; // icons for next and previous track
import { IconContext } from "react-icons"; // for customazing the icons
import SongList from "./SongList.jsx"

export default function Player() {
  //const [isPlaying, setIsPlaying] = useState(false);
  const [songs, setSongs] = useState(null)
  const [currentSong, setCurrentSong] = useState(null);

  if (!songs) {
    fetch("http://localhost:8080/api/songs")
    .then(response => response.json())
    .then(data => {
      setSongs(data);
    }, [])
    .catch(error => console.error("Error fetching data:", error));
    return <p>Loading songs!</p>;
  }

  const handleSongSelect = (songPath) => {
      setCurrentSong(songPath)
  }

  return (
      <SongList 
      songs={songs}
      handleSong={handleSongSelect}
      />
  );
  /*    <div className="component">
        <h2>Playing Now</h2>
        <img
          className="musicCover"
          src={songImg}
        />
        <div>
          <h3 className="title">Rubaiyyan</h3>
          <p className="subTitle">Qala</p>
        </div>
        <div>
          <button className="playButton">
            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
              <BiSkipPrevious />
            </IconContext.Provider>
          </button>
          {!isPlaying ? (
            <button className="playButton" onClick={playingButton}>
              <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </button>
          ) : (
            <button className="playButton" onClick={playingButton}>
              <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                <AiFillPauseCircle />
              </IconContext.Provider>
            </button>
          )}
          <button className="playButton">
            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
              <BiSkipNext />
            </IconContext.Provider>
          </button>
        </div>
      </div>
    );*/
}