export default function Playbar({ song }) {
    const appendImgPath = "C:/Users/tyler/Desktop/School/CollegeWork/Semester 3/Database Design/WebMusicPlayer/music_player/public/static/Images/";

    if (!song) {
        return <p>No song!</p>;
    }

    return (
        <audio controls>
            <source src={appendImgPath + song.imgPath} type="audio/mp4"></source>;
        </audio>
    );
}