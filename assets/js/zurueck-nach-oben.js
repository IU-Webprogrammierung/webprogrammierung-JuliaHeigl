const nachObenButton = document.querySelector(".nachObenButton");

// Button anzeigen ab Scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    nachObenButton.hidden = false;
  } else {
    nachObenButton.hidden = true;
  }
});

// Smooth scroll nach oben
nachObenButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});



