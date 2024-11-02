function animateCounter(id, start, end, duration) {
    const element = document.getElementById(id);
    let startTimestamp = null;

    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };

    window.requestAnimationFrame(step);
}

document.addEventListener("DOMContentLoaded", () => {
    // Animate the counter for each stat
    animateCounter("voters", 0, 93843000, 3000);        // Example: 93.8 million registered voters
    animateCounter("polling-units", 0, 176846, 3000);   // Example: 176,846 polling units
    animateCounter("parties", 0, 18, 2000);             // Example: 18 registered political parties
});

