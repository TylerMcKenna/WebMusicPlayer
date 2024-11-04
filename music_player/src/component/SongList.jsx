import SongListItem from "./SongListItem.jsx";

export default function SongList({ songs }) {

    /*{songs.map(song => {
        return (
            <SongListItem
            songId={song[0]}
            songname={song[1]}
            songPath={song[2]}
            imgPath={song[3]}
            />
        )
    })}    */
    // Make check for no items in songs
    return (
        <table>
            <tr>
                <td>Song ID</td>
                <td>Song Name</td>
                <td>Song Path</td>
                <td>Image Path</td>
            </tr>
            {songs.map(song => {
            return (
                <SongListItem
                songId={song[0]}
                songname={song[1]}
                songPath={song[2]}
                imgPath={song[3]}
                />
                )
            })}    
        </table>
    )
}