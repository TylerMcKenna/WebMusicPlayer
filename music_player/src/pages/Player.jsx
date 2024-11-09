import { useState } from "react"; 
import SongList from "../components/SongList.jsx";
import Playbar from "../components/Playbar.jsx";

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

  return (
    <>
      <SongList 
        songs={songs}
        handleSongSelect={
          (songPassed) => {
          setCurrentSong(songPassed);
        }
      }
      />
      <Playbar 
        song={currentSong}
      />
    </>
  );
}