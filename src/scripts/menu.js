// Toggle visibility of icons in the hamburger menu
document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".menu-outline").classList.toggle("hidden");
    document.querySelector(".close-outline").classList.toggle("hidden");

    // Toggle the 'nav-open' class on the navigation
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('nav-open');

    // Add/remove overflow hidden to both <html> and <body> when menu is open
    if (navLinks.classList.contains('nav-open')) {
        document.documentElement.style.overflow = 'hidden'; // Appliquer à <html>
        document.body.style.overflow = 'hidden';            // Appliquer à <body>
    } else {
        document.documentElement.style.overflow = 'auto';   // Réinitialiser <html>
        document.body.style.overflow = 'auto';              // Réinitialiser <body>
    }
});

// Close the menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        // Hide the menu by removing 'nav-open' class
        document.querySelector('.nav-links').classList.remove('nav-open');

        // Switch hamburger icons back
        document.querySelector(".menu-outline").classList.remove("hidden");
        document.querySelector(".close-outline").classList.add("hidden");

        // Re-enable scrolling
        document.documentElement.style.overflow = 'auto';
        document.body.style.overflow = 'auto';
    });
});

// Sticky
const sectionHeroEl = document.querySelector('.hero-section');

const obs = new IntersectionObserver(function (entries) {
    const ent = entries[0];
    console.log(ent)
    if(ent.isIntersecting === false) {
      document.querySelector('.header').classList.add('fixed', 'top-0', 'w-full', 'z-50');
      document.querySelector('.header').classList.remove('relative');
    } else {
      document.querySelector('.header').classList.remove('fixed', 'top-0', 'w-full', 'z-50');
      document.querySelector('.header').classList.add('relative');
    }
  }, 
  {
    // In the view port
    root: null,
    threshold: 0,
});

obs.observe(sectionHeroEl);
