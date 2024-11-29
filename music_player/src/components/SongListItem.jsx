import { DeleteSongButton } from "./DeleteSongButton";
import { EditSongButton } from "./EditSongButton";

//Look into what export default is and if it's needed
export function SongListItem({ songID, songName, songPath, imgPath, artistID, artistName, song, handleSongSelect, isAdmin }) {
    const appendSongPath = "/static/Music/";
    const appendImgPath = "/static/Images/";

    const doubleClickHandler = () => {
        console.log(songID);
        handleSongSelect(song);
        
    }

    async function editSong() { 
        let requestOptions = {
          method: "PATCH",
          headers: { "Content-Type": "application/json" }
        }
      
        console.log(`http://localhost:8080/api/update/${ songID }/${document.getElementById("nameText").value}`);
        const response = await fetch(`http://localhost:8080/api/update/${ songID }/${document.getElementById("nameText").value}`, requestOptions);
        if (response.status !== 200) {
            console.log(response.status)
          throw Error("Cannot update your item in the database");
        }
    }

    return (
        <>
        {isAdmin && <tr onDoubleClick={doubleClickHandler}>
            <td>{"" + songID}</td>
            <td><textarea id="nameText" defaultValue={"" + songName}/></td>
            <td>{appendSongPath + songPath}</td>
            <td>{appendImgPath + imgPath}</td>
            <td>{"" + artistID}</td>
            <td>{"" + artistName}</td>
            <td><DeleteSongButton songID={songID}/></td>
            <td><EditSongButton editSong={editSong}/></td>
        </tr>}
        {!isAdmin && <tr onDoubleClick={doubleClickHandler}>
            <td>{"" + songID}</td>
            <td>{"" + songName}</td>
            <td>{appendSongPath + songPath}</td>
            <td>{appendImgPath + imgPath}</td>
            <td>{"" + artistID}</td>
            <td>{"" + artistName}</td>
        </tr>}
        </>
    )
}

export default SongListItem;