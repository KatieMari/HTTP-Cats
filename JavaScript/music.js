// Gets Elements by ID from HTML for Background Music, Volume Control, Mute Button, and Play Button
const backgroundMusic = document.getElementById('background-music');
const volumeControl = document.getElementById('volume-control');
const playButton = document.getElementById('play-button');

// Sets Initial Volume and Plays when loaded
backgroundMusic.volume = 0.5;

// Updates Volume Based on Slider Value
volumeControl.addEventListener('input', function () {
    // Adjusts Volume Between 0 and 100
    backgroundMusic.volume = this.value / 100;
});

// Play/Pause Button Listener
playButton.addEventListener('click', function () {
    if (backgroundMusic.paused) {
        // Play Music
        backgroundMusic.play();
        // Change Button Text to 'Pause'
        playButton.innerHTML = 'Pause';
    } else {
        // Pause Music
        backgroundMusic.pause();
        // Change Button Text to 'Play'
        playButton.innerHTML = 'Play';
    }
});



