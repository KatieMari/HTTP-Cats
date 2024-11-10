// Gets Elements by ID from HTML for Background Music, Volume Control, and Mute Button
const backgroundMusic = document.getElementById('background-music');
const volumeControl = document.getElementById('volume-control');
const muteButton = document.getElementById('mute-button');

// Sets Initial Volume and Plays when loaded
backgroundMusic.volume = 0.5;
window.addEventListener('load', () => {
    // PLays Music on Load
    backgroundMusic.play();
});

// Updates Volume Based on Slider Value
volumeControl.addEventListener('input', function () {
    // Adjusts Volume Between 0 and 100
    backgroundMusic.volume = this.value / 100;
});

// Toggle Mute on Button Click
muteButton.addEventListener('click', function () {
    if (backgroundMusic.muted) {
        // Unmute Music
        backgroundMusic.muted = false;
        // Change Button Text to 'Mute'
        muteButton.textContent = 'Mute';
    } else {
        // Mute Music
        backgroundMusic.muted = true;
        // Change Button Text to 'Unmute'
        muteButton.textContent = 'Unmute';
    }
});
