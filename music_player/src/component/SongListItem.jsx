import { useState } from "react";

//Look into what export default is and if it's needed
export default function SongListItem({ songId, songName, songPath, imgPath }) {
    const appendSongPath = "../static/Music/";
    const appendImgPath = "../static/Images/";

    return (
        <tr>
            <td>{"" + songId}</td>
            <td>{"" + songName}</td>
            <td>{appendSongPath + songPath}</td>
            <td>{appendImgPath + imgPath}</td>
        </tr>
    )
}