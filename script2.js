document.addEventListener('scroll', function() {
    const boxes = document.querySelectorAll('.statcard');
    const triggerBottom = window.innerHeight / 1.2;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBottom) {
            box.classList.add('shaded');
        } else {
            box.classList.remove('shaded');
        }
    });
});
document.addEventListener('scroll', function() {
    const boxes = document.querySelectorAll('.owner');
    const triggerBottom = window.innerHeight / 1.2;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBottom) {
            box.classList.add('shaded');
        } else {
            box.classList.remove('shaded');
        }
    });
});
document.addEventListener('scroll', function() {
    const boxes = document.querySelectorAll('.teammember');
    const triggerBottom = window.innerHeight / 1.2;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBottom) {
            box.classList.add('shaded');
        } else {
            box.classList.remove('shaded');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const counters = [
        { id: 'people', target: 2000, duration: 2000 }, 
        { id: 'sales', target: 200, duration: 2500 },  
        { id: 'owners', target: 30, duration: 3000 }   
    ];

    let started = { counter1: false, counter2: false, counter3: false }; 

    const easeInOutSine = (t, b, c, d) => {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    };

    const countUp = (element, target, duration) => {
        let startTime = null;

        const animateCount = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const currentValue = easeInOutSine(progress, 0, target, 1);
            element.innerText = Math.ceil(currentValue);

            if (progress < 1) {
                requestAnimationFrame(animateCount);
            } else {
                element.innerText = target + '+'; // Add the + symbol when done
            }
        };

        requestAnimationFrame(animateCount);
    };

    const onScroll = () => {
        counters.forEach(counter => {
            const element = document.getElementById(counter.id);
            const counterPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (counterPosition < screenPosition && !started[counter.id]) {
                started[counter.id] = true;
                countUp(element, counter.target, counter.duration);
            }
        });
    };

    window.addEventListener('scroll', onScroll);
});
