// Get all navigation links
const navLinks = document.querySelectorAll('.nav-link');


navLinks.forEach(link => {
    link.addEventListener('click', function() {
      
        navLinks.forEach(item => item.classList.remove('active'));
        
        
        this.classList.add('active');
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.3 }); 

    elements.forEach((el) => observer.observe(el));
  });
