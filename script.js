const audio = document.querySelector(".audio-player");
const playButton = document.querySelector(".play-button");
const nextButton = document.querySelector(".next-button");
const previousButton = document.querySelector(".previous-button");
const songTitle = document.querySelector(".song-title");
const songArtist = document.querySelector(".song-artist");
const albumArt = document.querySelector(".album-art");
const currentTimeDisplay = document.querySelector(".current-time");
const durationDisplay = document.querySelector(".duration");
const progressBar = document.querySelector(".progress-bar");


function formatTime(seconds) {
    const minutes = Math.floor(seconds/60);
    const remainingSeconds = Math.floor(seconds % 60);

    return minutes + ":" + String(remainingSeconds).padStart(2, "0");
}

audio.addEventListener("loadmetadata", function() {
    durationDisplay.textConten = formatTime(audio.duration);
    progressBar.max = audio.duration;
});

audio.addEventListener("timeupdate", function() {
    currentTimeDisplay.textContent = formatTime(audio.currentTime);
    progressBar.value = audio.currentTime;
});

progressBar.addEventListener("input", function() {
    audio.currentTime = progressBar.value;
});

const songs =[


]

let currentSonIndex = 0;
loadSong(currentSongIndex);

function loadSong(index) {
    const song = songs[index]
    songTitle.textContent = song.title;
    songArtist.textContent = song.artist;
}

function nextSong() {
    currentSongIndex++;

    if(currentSongIndex>= songs.length) {
        currentSongIndex = 0;
    }

    loadSong(currentSongIndex);

}

nextButton.addEventListener("click", nextsong);

function previousSong() {
    currentSongIndex--;

    if(currentSongIndex < 0) {
        currentSongIndex = songs.length -1;
    }

    loadSong(currentSongIndex);

}

previousButton.addEventListener("click", previousSong);

playButton.addEventListener("click", function() {
    if (audio.paused) {
        audio.play();
        playButton.textContent = "Pause";
    } else {
        audio.pause();
        playButton.textContent = "Play"
    }
});

/*Below is the code for the members button*/

const membersButton = document.querySelector(".members");

membersButton.addEventListener("click", function () {
    window.location.href = "members.html";
});
