
window.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("enter-btn");
  const bgMusic = document.getElementById("bg-music");
  const container = document.querySelector(".container");

  const playOnHover = () => {
    document.body.addEventListener("mouseenter", () => {
      bgMusic.play().catch(() => {});
    }, { once: true });
  };

  playOnHover();

  button.addEventListener("click", () => {
    bgMusic.pause();
    bgMusic.currentTime = 0;
    container.classList.add("fade-out");
    setTimeout(() => {
      window.location.href = "https://anniebellb.github.io/Duke-AI-Student-Smart-Search/#/";
    }, 300);
  });
});
