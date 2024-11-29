import { useState } from "react";

export function EditSongButton({ editSong }) {
    return (
        <>
            <button onClick={editSong}>
                Save edits
            </button>
        </>
    )
}