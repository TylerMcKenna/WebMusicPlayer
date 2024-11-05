import SongListItem from "./SongListItem.jsx";
import "../styles/SongList.css";
import { useState } from "react";

export default function SongList({ songs, handleSongSelect }) {
    // Make check for no items in songs
    return (
        <table>
            <tr>
                <th>Song ID</th>
                <th>Song Name</th>
                <th>Song Path</th>
                <th>Image Path</th>
            </tr>
            {songs.map(song => {
            return (
                <SongListItem
                songID={song.songID}
                songName={song.songName}
                songPath={song.songPath}
                imgPath={song.imgPath}
                handleSongSelect={handleSongSelect}
                />
                )
            })}    
        </table>
    )
}