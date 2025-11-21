// Toggle menu
    function toggleMenu() {
        document.getElementById('nav-menu').classList.toggle('active');
    }

// Smooth scroll
    function smoothScroll(target) {
        document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
    }

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
    const slides = document.querySelectorAll('.slide');
    function showSlide(index) {
        document.getElementById('slider').style.transform = `translateX(-${index * 100}%)`;
    }
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }
    setInterval(nextSlide, 3000); // Auto slide every 3s

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
