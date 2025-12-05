// Toggle modo oscuro
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  themeToggle.textContent = document.body.classList.contains("dark-theme")
    ? "☀️"
    : "🌙";
});
// Scroll Reveal Animation
const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  reveals.forEach((elem) => {
    const rect = elem.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      elem.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
