document.addEventListener('DOMContentLoaded', () => {
    const clock = document.getElementById('clock');

    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        clock.innerHTML = `<span id="hours">${hours}</span>:<span id="minutes">${minutes}</span>:<span id="seconds">${seconds}</span>`;
    }

    // Update the clock every second
    setInterval(updateClock, 1000);

    // Initialize the clock display
    updateClock();
});
