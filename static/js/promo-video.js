const player = document.querySelector('.project-video .video-player');
const video = player.querySelector('video');
const controls = player.querySelector('.video-controls');
const toggle = player.querySelector('.video-toggle');
const progress = player.querySelector('.video-progress');
const time = player.querySelector('.video-time');
const mute = player.querySelector('.video-mute');
const fullscreen = player.querySelector('.video-fullscreen');
let touchTimer;

function formatTime(seconds) {
  return `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, '0')}`;
}

function updateProgress() {
  progress.value = video.currentTime;
  progress.style.setProperty('--played', `${video.currentTime / video.duration * 100}%`);
  progress.setAttribute('aria-valuetext', `${formatTime(video.currentTime)} of ${formatTime(video.duration)}`);
  time.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
}

function togglePlayback() {
  if (video.paused) video.play();
  else video.pause();
}

function updatePlayback() {
  player.dataset.playing = String(!video.paused);
  toggle.setAttribute('aria-label', video.paused ? 'Play' : 'Pause');
}

video.addEventListener('loadedmetadata', () => {
  progress.max = video.duration;
  progress.disabled = false;
  updateProgress();
  video.addEventListener('timeupdate', updateProgress);
});
video.addEventListener('play', updatePlayback);
video.addEventListener('pause', updatePlayback);
toggle.addEventListener('click', togglePlayback);
video.addEventListener('pointerup', event => {
  if (event.pointerType === 'mouse' && event.button === 0) togglePlayback();
});
progress.addEventListener('input', () => {
  video.currentTime = Number(progress.value);
  updateProgress();
});
mute.addEventListener('click', () => { video.muted = !video.muted; });
video.addEventListener('volumechange', () => {
  mute.setAttribute('aria-pressed', String(video.muted));
  mute.setAttribute('aria-label', video.muted ? 'Unmute' : 'Mute');
});
fullscreen.hidden = !document.fullscreenEnabled;
fullscreen.addEventListener('click', () => {
  if (document.fullscreenElement) document.exitFullscreen();
  else player.requestFullscreen();
});
document.addEventListener('fullscreenchange', () => {
  fullscreen.setAttribute('aria-label', document.fullscreenElement ? 'Exit fullscreen' : 'Enter fullscreen');
});
player.addEventListener('pointerdown', event => {
  if (event.pointerType !== 'touch') return;
  clearTimeout(touchTimer);
  player.classList.add('controls-visible');
});
function scheduleTouchHide(event) {
  if (event.pointerType !== 'touch') return;
  touchTimer = setTimeout(() => player.classList.remove('controls-visible'), 3000);
}
player.addEventListener('pointerup', scheduleTouchHide);
player.addEventListener('pointercancel', scheduleTouchHide);

controls.hidden = false;
video.controls = false;
