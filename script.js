// Toggle menu
    function toggleMenu() {
        const navMenu = document.getElementById('nav-menu');
        navMenu.classList.toggle('active');
    }

// Smooth scroll
    function smoothScroll(target) {
        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            // Close mobile menu after clicking a link
            const navMenu = document.getElementById('nav-menu');
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        }
    }

// Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const navMenu = document.getElementById('nav-menu');
        const hamburger = document.querySelector('.hamburger');
        const navbar = document.querySelector('.navbar');
        
        if (navMenu && hamburger && navbar) {
            const isClickInsideNav = navbar.contains(event.target);
            const isClickOnHamburger = hamburger.contains(event.target);
            
            if (!isClickInsideNav && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        }
    });

// Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });
    document.querySelectorAll('section').forEach(section => observer.observe(section));

// Slider
    let currentSlide = 0;
    let slides = [];
    let autoSlideInterval;
    
    function initSlider() {
        slides = document.querySelectorAll('.slide');
        if (slides.length > 0) {
            showSlide(0);
            // Auto slide every 3s
            autoSlideInterval = setInterval(nextSlide, 3000);
        }
    }
    
    function showSlide(index) {
        const slider = document.getElementById('slider');
        if (slider) {
            slider.style.transform = `translateX(-${index * 100}%)`;
        }
    }
    
    function nextSlide() {
        if (slides.length > 0) {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }
    }

    function nextProjectSlide() {
        if (slides.length > 0) {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }
    }
    
    function prevSlide() {
        if (slides.length > 0) {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }
    }

    function prevProjectSlide() {
        if (slides.length > 0) {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }
    }
    
    // Initialize slider when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSlider);
    } else {
        initSlider();
    }

// Modal
    function openModal(src) {
        document.getElementById('imageModal').style.display = 'block';
        document.getElementById('modalImage').src = src;
    }
    function closeModal() {
        document.getElementById('imageModal').style.display = 'none';
    }
    window.onclick = function(event) {
        if (event.target === document.getElementById('imageModal')) {
            closeModal();
        }
    }

// Form validation
    function validateForm() {
        let valid = true;
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        document.getElementById('nameError').style.display = 'none';
        document.getElementById('emailError').style.display = 'none';
        document.getElementById('messageError').style.display = 'none';
        if (!name) {
            document.getElementById('nameError').style.display = 'block';
            valid = false;
        }
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            document.getElementById('emailError').style.display = 'block';
            valid = false;
        }
        if (!message) {
            document.getElementById('messageError').style.display = 'block';
            valid = false;
        }
        if (valid) alert('Pesan terkirim! Kami akan segera menghubungi Anda.');
        return false; // Prevent actual submit for demo
    }
