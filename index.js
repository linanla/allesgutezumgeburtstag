let started = false;

function startVideo() {
  if (started) return;
  started = true;

  const iframe = document.getElementById("yt");
  iframe.src += "&autoplay=1";
}

["mousemove", "click", "touchstart"].forEach(event => {
  document.addEventListener(event, startVideo);
});

function startCountdown(callback) {
    const targetDate = new Date("2027-07-29T00:00:00");

    setInterval(() => {
        const now = new Date();
        const diff = targetDate - now;

        if (diff <= 0) {
            callback(0, 0, 0);
            return;
        }
        const totalSeconds = Math.floor(diff / 1000);

        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        callback(hours, minutes, seconds);

    }, 1000);
}

startCountdown((h, m, s) => {
    document.getElementById("timer").textContent =
        `${h} Stunden, ${m} Minuten, ${s} Sekunden`;
});