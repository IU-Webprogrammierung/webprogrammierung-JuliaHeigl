const nachObenButton = document.getElementById("nachObenButton");

// Button anzeigen ab Scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    nachObenButton.classList.remove("opacity-0", "pointer-events-none");
    nachObenButton.classList.add("opacity-300");
  } else {
    nachObenButton.classList.add("opacity-0", "pointer-events-none");
    nachObenButton.classList.remove("opacity-100");
  }
});

// Smooth scroll nach oben
nachObenButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});