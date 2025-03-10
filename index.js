document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio');
    const lyrics = document.getElementById('lyrics');
    const lines = lyrics.getElementsByTagName('p');

    audio.addEventListener('timeupdate', function() {
        for (let i = 0; i < lines.length; i++) {
            const startTime = parseFloat(lines[i].getAttribute('data-time'));
            const endTime = i < lines.length - 1 ? parseFloat(lines[i + 1].getAttribute('data-time')) : audio.duration;

            if (audio.currentTime >= startTime && audio.currentTime < endTime) {
                lines[i].classList.add('highlight');
                lines[i].scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
                lines[i].classList.remove('highlight');
            }
        }
    });

    for (let i = 0; i < lines.length; i++) {
        lines[i].addEventListener('click', function() {
            const time = parseFloat(this.getAttribute('data-time'));
            audio.currentTime = time;
        });
    }
});