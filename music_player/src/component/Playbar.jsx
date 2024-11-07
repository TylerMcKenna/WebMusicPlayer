export default function Playbar({ song }) {
    const appendSongPath = "/static/Music/";

    if (!song) {
        return <p>No song!</p>;
    }

    console.log(appendSongPath + song.songPath);

    return (
        <audio controls>
            <source src={appendSongPath + song.songPath} type="audio/mp4"></source>;
        </audio>
    );
}