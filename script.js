// Mobile navigation
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav");

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", isOpen);
  menuButton.textContent = isOpen ? "×" : "☰";
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  });
});

// Reveal sections as they enter the screen
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

// Keep the footer year current
document.getElementById("year").textContent = new Date().getFullYear();

// Prevent sample links from jumping to the top until you add your real URLs
document.querySelectorAll(".placeholder-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Add your real profile or project URL to this link in index.html.");
  });
});