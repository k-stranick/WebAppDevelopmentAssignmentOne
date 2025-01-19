document.addEventListener('click', () => {
    const audio = document.getElementById('hiddenAudio');
    audio.muted = false; // Unmute after user interaction
    audio.play().catch(error => console.error('Playback error:', error));
});