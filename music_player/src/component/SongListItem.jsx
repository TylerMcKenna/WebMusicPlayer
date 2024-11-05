//Look into what export default is and if it's needed
export default function SongListItem({ songID, songName, songPath, imgPath, song, handleSongSelect }) {
    const appendSongPath = "C:/Users/tyler/Desktop/School/CollegeWork/Semester 3/Database Design/WebMusicPlayer/music_player/public/static/Music/";
    const appendImgPath = "C:/Users/tyler/Desktop/School/CollegeWork/Semester 3/Database Design/WebMusicPlayer/music_player/public/static/Images/";

    const doubleClickHandler = () => {
        handleSongSelect(song);
    }

    return (
        <tr onDoubleClick={doubleClickHandler}>
            <td>{"" + songID}</td>
            <td>{"" + songName}</td>
            <td>{appendSongPath + songPath}</td>
            <td>{appendImgPath + imgPath}</td>
        </tr>
    )
}