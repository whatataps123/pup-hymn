document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('audio');
    const lyrics = document.querySelectorAll('#lyrics p');

    audio.addEventListener('timeupdate', function () {
        lyrics.forEach((line, index) => {
            const startTime = parseFloat(line.getAttribute('data-time'));
            const endTime = index < lyrics.length - 1 ? parseFloat(lyrics[index + 1].getAttribute('data-time')) : audio.duration;
            line.classList.toggle('highlight', audio.currentTime >= startTime && audio.currentTime < endTime);
        });
    });
});