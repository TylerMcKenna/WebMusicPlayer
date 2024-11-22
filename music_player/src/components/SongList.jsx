import SongListItem from "./SongListItem.jsx";
import "../styles/SongList.css";
import { useState } from "react";

export function SongList({ songs, handleSongSelect, isDelete }) {
    // Make check for no items in songs
    return (
        <table>
            <tr>
                <th>Song ID</th>
                <th>Song Name</th>
                <th>Song Path</th>
                <th>Image Path</th>
                <th>Artist ID</th>
                <th>Artist Name</th>
            </tr>
            {songs.map(song => {        
            return (
                <SongListItem
                songID={song.songID}
                songName={song.songName}
                songPath={song.songPath}
                imgPath={song.imgPath}
                artistID={song.artistID}
                artistName={song.artistName}
                song={song}
                handleSongSelect={handleSongSelect}
                isDelete={isDelete}
                />
                )
            })}    
        </table>
    )
}

export default SongList;