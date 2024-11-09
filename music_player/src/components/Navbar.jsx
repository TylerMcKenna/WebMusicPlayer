import { Link } from "react-router-dom";

export function Navbar() {
    return  (
        <>
            <Link to="/artists">
                <button>Artists</button>
            </Link>
            <Link to="/artistsPage">
                <button>ArtistsPage</button>
            </Link>
            <Link to="/player">
                <button>Player</button>
            </Link>        
            <Link to="/">
                <button>Playlists</button>
            </Link>
        </>
    )
}

export default Navbar;