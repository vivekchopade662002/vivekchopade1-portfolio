document.addEventListener('DOMContentLoaded', function() {
    // Debug function to log element existence
    function logElementExists(selector) {
        const element = document.querySelector(selector);
        console.log(`Element ${selector} exists:`, !!element);
        return element;
    }

    // Mobile Navigation
    const toggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (toggle && navMenu) {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                toggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Typing animation
    const typed = new Typed(".typing", {
        strings: ["Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    const typed2 = new Typed(".typing-2", {
        strings: ["Java Developer", "Web Developer", "Software Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Sticky navbar on scroll
    window.addEventListener('scroll', function() {
        if(window.scrollY > 20){
            document.querySelector(".navbar").classList.add("sticky");
        }else{
            document.querySelector(".navbar").classList.remove("sticky");
        }
    });

    // Simple Mobile Menu Toggle
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.navbar .menu');

    if (menuBtn && menu) {
        menuBtn.addEventListener('click', function() {
            menu.classList.toggle('active');
        });

        // Close menu when a menu item is clicked
        document.querySelectorAll('.navbar .menu a').forEach(link => {
            link.addEventListener('click', function() {
                menu.classList.remove('active');
            });
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission
    const form = document.querySelector('form');
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // You can add your form submission logic here
            alert('Thank you for your message! I will get back to you soon.');
            form.reset();
        });
    }

    // Bubble animation
    function createBubble() {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        
        const size = Math.random() * 30 + 20; // Random size between 20px and 50px
        const left = Math.random() * 100; // Random position from 0 to 100%
        const duration = Math.random() * 10 + 15; // Random duration between 15s and 25s
        
        bubble.style.setProperty('--size', `${size}px`);
        bubble.style.setProperty('--duration', `${duration}s`);
        bubble.style.left = `${left}%`;
        
        document.querySelector('.animated-background').appendChild(bubble);
        
        // Remove bubble after animation
        setTimeout(() => {
            bubble.remove();
        }, duration * 1000);
    }

    // Create new bubbles periodically
    setInterval(createBubble, 3000);
});
