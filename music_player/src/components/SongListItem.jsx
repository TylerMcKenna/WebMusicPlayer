//Look into what export default is and if it's needed
export function SongListItem({ songID, songName, songPath, imgPath, artistID, artistName, song, handleSongSelect }) {
    const appendSongPath = "/static/Music/";
    const appendImgPath = "/static/Images/";

    const doubleClickHandler = () => {
        handleSongSelect(song);
    }

    return (
        <tr onDoubleClick={doubleClickHandler}>
            <td>{"" + songID}</td>
            <td>{"" + songName}</td>
            <td>{appendSongPath + songPath}</td>
            <td>{appendImgPath + imgPath}</td>
            <td>{"" + artistID}</td>
            <td>{"" + artistName}</td>
        </tr>
    )
}

export default SongListItem;