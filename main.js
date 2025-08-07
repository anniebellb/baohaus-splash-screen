
document.addEventListener('DOMContentLoaded', () => {
  const dumpling = document.getElementById('dumpling');
  const plusOne = document.getElementById('plus-one');
  const introScreen = document.getElementById('intro-screen');
  const splashScreen = document.getElementById('splash-screen');
  const bgMusic = document.getElementById('bg-music');

  dumpling.addEventListener('click', () => {
    dumpling.classList.add('clicked');
    plusOne.classList.add('show');

    setTimeout(() => {
      plusOne.classList.remove('show');
    }, 1000);

    bgMusic.play().catch(e => console.warn('Autoplay blocked:', e));

    introScreen.classList.add('fade-out');
    setTimeout(() => {
      introScreen.style.display = 'none';
      splashScreen.classList.remove('hidden');
      splashScreen.classList.add('fade-in');
    }, 1000);
  });
});
