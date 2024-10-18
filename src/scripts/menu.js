document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".menu-outline").classList.toggle("hidden");
    document.querySelector(".close-outline").classList.toggle("hidden");
  });

document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('hidden');
});