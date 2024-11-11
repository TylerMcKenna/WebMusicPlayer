// MAKE ARTIST A DROPDOWN LATER DOWN THE LINE!!!! IMPORTANT

export function AddSong() {

    const submit = (name, song, image, artist) => {

    } 

    return (
        <>
            <h2>Add New Song</h2>
            <form action="http://localhost:8080/submitSong" method="POST">
                <label>Enter the Song's Name:
                    <input name="songName" type="text" required />
                </label>
                <br/>
                <label>Enter the Song's File:
                    <input name="songFile" type="file" accept="audio/mp3" required />
                </label>
                <br/>
                <label>Enter the Song's Image:
                    <input name="songImage" type="file" accept="image/png, image/jpeg" required />
                </label>
                <br/>
                ****  MUST BE AN ARTIST ID #, TEMPORARY. WILL BE A DROPDOWN LATER DOWN THE LINE
                <label>Enter the Song's ArtistID:
                    <input name="artistID" type="text" required />
                </label>****
                <br/>
                <label>Submit:
                    <input type="submit" />
                </label>
            </form>
        </>
    )
}