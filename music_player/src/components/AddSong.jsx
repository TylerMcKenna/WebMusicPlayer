import { useRef, useEffect } from "react";

export function AddSong() {
    const form = useRef(null);

    useEffect(() => {
        const handleSubmit = (e) => {
            e.preventDefault();

            const fd = new FormData(form.current); // Corrected 'form.content' to 'form.current'

            fetch('http://localhost:8080/submitSong', {
                method: "POST",
                body: fd,
            });
        };

        const formElement = form.current;

        if (formElement) {
            formElement.addEventListener('submit', handleSubmit);
        }

        // Cleanup function to remove the event listener to avoid duplication
        return () => {
            if (formElement) {
                formElement.removeEventListener('submit', handleSubmit);
            }
        };
    }, []); // Empty dependency array ensures this effect runs only once

    return (
        <>
            <br/>
            <h2>Add New Song</h2>
            <form ref={form}>
                <label>Enter the Song's Name:
                    <input name="songName" type="text" required />
                </label>
                <br/>
                <label>Enter the Song's File:
                    <input name="songFile" type="file" accept="audio/mp3" required />
                </label>
                <br/>
                <br/>
                <label>Enter the Song's ArtistID:
                    <input name="artistID" type="text" required />
                </label>
                <br/>
                <input type="submit" />
            </form>
        </>
    );
}