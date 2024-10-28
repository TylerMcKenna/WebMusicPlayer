function sussy() {
    document.getElementById("home").addEventListener("click", () => {
        fetch('/').then(response => response.json()).then(home => console.log(home));
    });

    document.getElementById("artists").addEventListener("click", () => {
        fetch('/artists').then(response => response.json()).then(artists => console.log(artists));
    });

    document.getElementById("playlists").addEventListener("click", () => {
        fetch('/playlists').then(response => response.json()).then(playlists => console.log(playlists));
    });
}