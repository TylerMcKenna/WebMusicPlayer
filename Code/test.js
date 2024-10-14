let playpause_btn = document.querySelector(".playpause-track");

let track_index = 0;
let isPlaying = false;
let updateTimer;

let curr_track = document.createElement('audio');