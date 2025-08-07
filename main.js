
document.addEventListener("DOMContentLoaded", () => {
  const dumpling = document.getElementById("dumpling");
  const introScreen = document.querySelector(".intro-screen");
  const splashScreen = document.querySelector(".splash-container");
  const audio = document.getElementById("intro-music");

  dumpling.addEventListener("click", () => {
    dumpling.classList.add("clicked");
    setTimeout(() => {
      audio.play().catch(() => {});
      introScreen.style.opacity = 0;
      setTimeout(() => {
        introScreen.classList.add("hidden");
        splashScreen.classList.remove("hidden");
      }, 600);
    }, 300);
  });

  const button = document.getElementById("enter-btn");
  if (button) {
    button.addEventListener("click", () => {
      audio.pause();
      audio.currentTime = 0;
      document.querySelector(".container").classList.add("fade-out");
      setTimeout(() => {
        window.location.href = "https://anniebellb.github.io/Duke-AI-Student-Smart-Search/#/";
      }, 300);
    });
  }
});
