export function DeleteSongButton({songID}) {
    function deleteSong() {
        console.log("api/delete/" + songID);
        delete("api/delete/:songID")
    }
    return (
        <>
            <button onClick={deleteSong()}>
                Delete
            </button>
        </>
    )
}