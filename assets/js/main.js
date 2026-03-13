// JavaScript for fade-in animation on scroll
const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        // When the element is in view, add the 'visible' class
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target); // Stop observing after it's visible
        }
    });
}, {
    threshold: 0.1 // Trigger when 10% of the element is visible
});

// Tell the observer to watch all service boxes
const serviceBoxes = document.querySelectorAll('.service-box');
serviceBoxes.forEach(box => observer.observe(box));