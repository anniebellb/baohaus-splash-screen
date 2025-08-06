
window.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("enter-btn");
  const bgMusic = document.getElementById("bg-music");
  const container = document.querySelector(".container");

  button.addEventListener("click", () => {
    bgMusic.pause();
    bgMusic.currentTime = 0;
    container.classList.add("fade-out");
    setTimeout(() => {
      parent.postMessage("trigger-continue-button", "*");
    }, 1000);
  });

  window.parent.postMessage({ type: 'MIGHTY_INTERACTIVE_LOAD' }, '*');
  new ResizeObserver(() => {
    window.parent.postMessage({
      type: 'MIGHTY_INTERACTIVE',
      data: { height: document.documentElement.offsetHeight }
    }, '*');
  }).observe(document.documentElement);
});
