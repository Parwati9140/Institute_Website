document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          console.log(entry.target.classList); // Add this line for debugging
        }
      });
    }, { threshold: 0.3 }); 

    elements.forEach((el) => observer.observe(el));
});
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.5 });  // Increased threshold to 0.5 for earlier detection
