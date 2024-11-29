import { useState } from "react";

export function DeleteSongButton({songID}) {
    async function deleteSong() {
        this.remove();
          let requestOptions = {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        }
        
        
        
        console.log(`/api/delete/${songID}`)
        const response = await fetch(`http://localhost:8080/api/delete/${ songID }`, requestOptions);
        if (response.status !== 204) {
            console.log("error: " + response.status)
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