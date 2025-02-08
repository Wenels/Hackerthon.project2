// script.js
// ... (Existing smooth scrolling code) ...

// Step Animations (Triggered on scroll)
const steps = document.querySelectorAll('.step');

function animateSteps() {
  steps.forEach(step => {
    const stepTop = step.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight * 0.8; // Trigger when 80% of the viewport is visible

    if (stepTop < triggerPoint) {
      step.classList.add('active');
    }
  });
}

window.addEventListener('scroll', animateSteps); // Animate on scroll
animateSteps(); // Also animate on initial load (in case elements are already in view)


// Testimonial Hover Effect (using JavaScript for a more interactive approach)
const testimonialBoxes = document.querySelectorAll('#box > div');

testimonialBoxes.forEach(box => {
  box.addEventListener('mouseenter', () => {
    box.style.transform = 'translateY(-5px)';
    box.style.boxShadow = '0 6px 10px rgba(0, 0, 0, 0.15)';
  });

  box.addEventListener('mouseleave', () => {
    box.style.transform = 'translateY(0)';
    box.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)'; // Reset to original shadow
  });
});