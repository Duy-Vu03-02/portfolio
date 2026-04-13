// Hiệu ứng chuột đi theo
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// Hiệu ứng xuất hiện khi cuộn (ScrollReveal)
ScrollReveal().reveal(".hero-content", {
  delay: 200,
  origin: "bottom",
  distance: "50px",
});
ScrollReveal().reveal(".project-card", {
  interval: 200,
  origin: "right",
  distance: "100px",
});
ScrollReveal().reveal(".skill-box", { interval: 100, scale: 0.5 });

// Hiệu ứng Hover card
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    cursor.style.transform = "scale(3)";
    cursor.style.backgroundColor = "rgba(0, 242, 255, 0.1)";
  });
  card.addEventListener("mouseleave", () => {
    cursor.style.transform = "scale(1)";
    cursor.style.backgroundColor = "transparent";
  });
});
