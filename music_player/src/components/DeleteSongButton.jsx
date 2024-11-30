import { useState } from "react";

export function DeleteSongButton({songID}) {
    async function deleteSong() {

          let requestOptions = {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        }
        
        
        const response = await fetch(`http://localhost:8080/api/delete/${ songID }`, requestOptions);
        if (response.status !== 204) {
            throw Error("Cannot delete your item from database");
        }
    }
    return (
        <>
            <button onClick={deleteSong}>
                Delete
            </button>
        </>
    )
}