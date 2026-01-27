/**
 * Personal Portfolio Website Script
 * Updated for "Modern Minimalist" theme
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, {
        root: null,
        threshold: 0.15, // Trigger when 15% visible
        rootMargin: "0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));


    // 2. Smooth Scrolling for Navigation Links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });


    // 3. Project Filtering Logic (for projects.html)
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterButtons.length > 0 && projectCards.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(b => {
                    b.classList.remove('bg-primary', 'text-white');
                    b.classList.add('bg-white', 'text-slate-600', 'hover:bg-slate-50');
                });
                // Add active class to clicked button
                btn.classList.remove('bg-white', 'text-slate-600', 'hover:bg-slate-50');
                btn.classList.add('bg-primary', 'text-white');

                const filterValue = btn.getAttribute('data-filter');

                projectCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                        // Add a small fade in effect when filtering
                        card.classList.remove('active');
                        setTimeout(() => card.classList.add('active'), 50);
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }


    // 4. Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            // Optional: Animate height or slide
        });
    }

    // 5. Contact Form Placeholder - REMOVED

    // 6. Focus/Blur Effect for About Sections
    const aboutSections = document.querySelectorAll('.section-item');
    const aboutContainer = document.getElementById('about-content');
    
    if (aboutSections.length > 0 && aboutContainer) {
        const focusObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // If section is more than 40% visible, it's the "active" one
                if (entry.isIntersecting) {
                    entry.target.classList.add('section-active');
                } else {
                    entry.target.classList.remove('section-active');
                }
            });

            // Check if any section is active to enable focus mode on container
            // If active, non-active siblings will fade out via CSS
            const anyActive = document.querySelectorAll('.section-active').length > 0;
            if (anyActive) {
                aboutContainer.classList.add('focus-mode-active');
            } else {
                aboutContainer.classList.remove('focus-mode-active');
            }

        }, {
            root: null,
            threshold: 0.4, // 40% visibility triggers focus
            rootMargin: "-10% 0px -10% 0px" // Shrink view slightly to focus on center
        });

        aboutSections.forEach(section => focusObserver.observe(section));
    }

});
