
// Intro sound start (browser requires a gesture)
const soundBtn = document.getElementById('sound');
const enterBtn = document.getElementById('enter');
const audio = new Audio('./assets/track.mp3'); // replace with your audio after upload
audio.loop = false;
audio.preload = 'auto';

soundBtn?.addEventListener('click', async () => {
  try { await audio.play(); soundBtn.textContent = 'Sound On'; } catch(e){}
});

enterBtn?.addEventListener('click', async () => {
  if (audio.paused) {
    try { await audio.play(); } catch(e){}
  }
  // Small fade before navigation
  document.body.style.transition = 'opacity .35s ease';
  document.body.style.opacity = 0;
  setTimeout(()=>{ window.location.href = 'home.html'; }, 250);
});
