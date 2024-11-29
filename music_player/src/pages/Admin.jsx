import { AddSong } from "../components/AddSong";
import { useState } from "react"; 
import AdminList from "../components/AdminList.jsx";

export function Admin() {
    const [songs, setSongs] = useState(null)
    
    if (!songs) {
        fetch("http://localhost:8080/api/songs")
        .then(response => response.json())
        .then(data => {
          setSongs(data);
        }, [])
        .catch(error => console.error("Error fetching data:", error));
        return <p>Loading songs!</p>;
      }

    return (
        <>
            <h1>This is the Admin Page</h1>
            <AddSong />
            <AdminList
                songs={songs}
                handleSongSelect={() => console.log("lol")
                }
                isAdmin={true}
            />
        </>
    )
}

export default Admin;