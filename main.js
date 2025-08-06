
window.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("enter-btn");
  const bgMusic = document.getElementById("bg-music");
  const container = document.querySelector(".container");

  const enableMusicOnHover = () => {
    const trigger = () => {
      bgMusic.volume = 1;
      bgMusic.play().catch(() => {});
    };
    document.body.addEventListener("mouseenter", trigger, { once: true });
  };

  enableMusicOnHover();

  button.addEventListener("click", () => {
    bgMusic.pause();
    bgMusic.currentTime = 0;
    container.classList.add("fade-out");
    setTimeout(() => {
      window.location.href = "https://anniebellb.github.io/Duke-AI-Student-Smart-Search/#/";
    }, 300);
  });
});
