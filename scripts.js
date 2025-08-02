// Mobile Menu Toggle
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
    
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Sticky header on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('nav');
    header.classList.toggle('shadow-lg', window.scrollY > 0);
});

// Form validation for contact page
if (document.getElementById('contact-form')) {
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // In a real implementation, you would send the form data to a server here
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

// Testimonial slider
if (document.querySelector('.testimonial-slider')) {
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('.testimonial-item');
    const totalTestimonials = testimonials.length;
    
    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.toggle('hidden', i !== index);
        });
    }
    
    document.querySelector('.testimonial-next').addEventListener('click', function() {
        currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
        showTestimonial(currentTestimonial);
    });
    
    document.querySelector('.testimonial-prev').addEventListener('click', function() {
        currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
        showTestimonial(currentTestimonial);
    });
    
    // Initialize
    showTestimonial(0);
}

// Scroll reveal animations
function scrollReveal() {
    const elements = document.querySelectorAll('.scroll-reveal');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.classList.add('animate-fadeInUp');
        }
    });
}

window.addEventListener('scroll', scrollReveal);
window.addEventListener('load', scrollReveal);


