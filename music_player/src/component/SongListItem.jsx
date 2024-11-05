//Look into what export default is and if it's needed
export default function SongListItem({ songID, songName, songPath, imgPath, handleSongSelect }) {
    const appendSongPath = "../static/Music/";
    const appendImgPath = "../static/Images/";

    const doubleClickHandler = () => {
        console.log("You have clicked twice");
        handleSongSelect(appendSongPath + songPath);
    }

    return (
        <tr onDoubleClickCapture={doubleClickHandler}>
            <td>{"" + songID}</td>
            <td>{"" + songName}</td>
            <td>{appendSongPath + songPath}</td>
            <td>{appendImgPath + imgPath}</td>
        </tr>
    )
}