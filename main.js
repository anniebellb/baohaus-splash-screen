
document.addEventListener('DOMContentLoaded', () => {
  const dumpling = document.getElementById('dumpling');
  const plusOne = document.getElementById('plus-one');
  const introScreen = document.getElementById('intro-screen');
  const splashScreen = document.getElementById('splash-screen');
  const bgMusic = document.getElementById('bg-music');

  dumpling.addEventListener('click', () => {
    dumpling.classList.add('clicked');
    plusOne.classList.add('show');

    bgMusic.play().catch(e => console.warn('Autoplay blocked:', e));

    setTimeout(() => {
      plusOne.classList.remove('show');
      introScreen.classList.add('fade-out');
    }, 2000);

    setTimeout(() => {
      introScreen.style.display = 'none';
      splashScreen.classList.remove('hidden');
      splashScreen.classList.add('fade-in');
    }, 2600);
  });

  const enterBtn = document.getElementById("enter-btn");
  if (enterBtn) {
    enterBtn.addEventListener("click", () => {
      bgMusic.pause();
      bgMusic.currentTime = 0;
      document.querySelector(".container").classList.add("fade-out");
      setTimeout(() => {
        window.location.href = "https://anniebellb.github.io/Duke-AI-Student-Smart-Search/#/";
      }, 300);
    });
  }
});
