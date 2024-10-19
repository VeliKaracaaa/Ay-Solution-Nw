// Toggle visibility of icons in the hamburger menu
document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".menu-outline").classList.toggle("hidden");
    document.querySelector(".close-outline").classList.toggle("hidden");

    // Toggle the 'nav-open' class on the navigation
    document.querySelector('.nav-links').classList.toggle('nav-open');

    // Add/remove overflow hidden to both <html> and <body> when menu is open
    if (document.querySelector('.nav-links').classList.contains('nav-open')) {
        document.documentElement.style.overflow = 'hidden'; // Apply to <html>
        document.body.style.overflow = 'hidden';            // Apply to <body>
    } else {
        document.documentElement.style.overflow = 'auto';   // Reset <html>
        document.body.style.overflow = 'auto';              // Reset <body>
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
