const easeOutCirc = (t) => Math.sqrt(1 - Math.pow(t - 1, 2));

const animateCounter = (elementId, start, end, duration) => {
    const counterElement = document.getElementById(elementId);
    let startTime = null;

    const step = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easeProgress = easeOutCirc(progress);
        const value = Math.floor(start + (end - start) * easeProgress);

        counterElement.textContent = value;

        if (elapsedTime < duration) {
            requestAnimationFrame(step);
        } else {
            // Add the "+" sign once the counting is done
            counterElement.textContent = value + "+";
        }
    };

    requestAnimationFrame(step);
};

// Start the animation for each counter
animateCounter('People', 1, 2000, 2000);
animateCounter('Sales', 1, 200, 2500);
animateCounter('Trust', 1, 30, 3000);