console.log("HCU Netflix Clone Running 🔥");

/* Navbar background on scroll */
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.background = "#000";
  } else {
    navbar.style.background = "rgba(0,0,0,0.55)";
  }
});

/* Movie hover sound effect optional */
const cards = document.querySelectorAll(".movie-card");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.zIndex = "20";
  });

  card.addEventListener("mouseleave", () => {
    card.style.zIndex = "1";
  });
});
