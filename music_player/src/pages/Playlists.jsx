import { Link } from "react-router-dom";

export default function Playlists() {
    return (
        <>
            <h1>This is the Playlists Page</h1>
            <Link to="/artists" >Artists</Link>
            <Link to="/artistsPage" >ArtistsPage</Link>
            <Link to="/player" >Player</Link>        
            <Link to="/" >Playlists</Link>
        </>
    )
}