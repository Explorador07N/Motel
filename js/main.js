// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 800,
        offset: 100,
        once: true
    });

    // Handle image loading
    document.querySelectorAll('img').forEach(img => {
        if (img.complete) {
            img.parentElement.classList.remove('loading');
        } else {
            img.parentElement.classList.add('loading');
            img.addEventListener('load', () => {
                img.parentElement.classList.remove('loading');
            });
            img.addEventListener('error', () => {
                img.parentElement.classList.remove('loading');
                img.parentElement.classList.add('error');
            });
        }
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add/remove scrolled class for header background
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Add active class to current navigation item based on scroll position
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').substring(1) === current) {
                item.classList.add('active');
            }
        });
    });

    // Room image hover effect
    const roomImages = document.querySelectorAll('.room-image');
    roomImages.forEach(image => {
        image.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
        });
        image.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Floating WhatsApp button show/hide on scroll
    const whatsappButton = document.querySelector('.floating-whatsapp');
    let isScrolling;

    window.addEventListener('scroll', () => {
        whatsappButton.style.opacity = '1';
        clearTimeout(isScrolling);

        isScrolling = setTimeout(() => {
            whatsappButton.style.opacity = '0.7';
        }, 1500);
    });

    whatsappButton.addEventListener('mouseenter', () => {
        whatsappButton.style.opacity = '1';
    });

    whatsappButton.addEventListener('mouseleave', () => {
        if (!isScrolling) {
            whatsappButton.style.opacity = '0.7';
        }
    });
}); 