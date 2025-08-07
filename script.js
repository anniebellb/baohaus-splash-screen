
document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("intro-audio");
  const enterBtn = document.getElementById("enter-btn");

  // Play audio on first interaction
  window.addEventListener("mouseover", () => {
    if (audio.paused) {
      audio.play().catch(e => console.log("Audio not allowed yet."));
    }
  }, { once: true });

  enterBtn.addEventListener("click", () => {
    document.body.style.transition = "opacity 1s";
    document.body.style.opacity = 0;
    setTimeout(() => {
      window.location.href = "https://anniebellb.github.io/Duke-AI-Student-Smart-Search/#/";
    }, 1000);
  });
});
