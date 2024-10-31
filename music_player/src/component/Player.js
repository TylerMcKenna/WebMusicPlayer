import { useEffect, useState } from "react"; 
import useSound from "use-sound"; // for handling the sound
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // icons for play and pause
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"; // icons for next and previous track
import { IconContext } from "react-icons"; // for customazing the icons
import zion from "./..\\static\\Music\\Complex-ZionT.mp3"

export default function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [songUrl, setSongUrl] = useState(null)
  const [play, { pause, duration, sound }] = useSound(songUrl);

  const playingButton = () => {
      //useSound(songUrl);
      if (isPlaying) {
          pause();
          setIsPlaying(false);
          console.log(sound)
      } else {
          play();
          setIsPlaying(true);
      }
  };

  useEffect(() => {
    fetch("http://localhost:8080/api/songs")
      .then(response => response.json())
      .then(data => sound = setSongUrl["songPath"])
      .catch(error => console.error("Error fetching data:", error))
   }, []);  

  return (
      <div className="component">
        <h2>Playing Now</h2>
        <img
          className="musicCover"
          src="https://picsum.photos/200/200"
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
    );
}