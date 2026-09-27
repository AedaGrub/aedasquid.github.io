const iframe = document.querySelector('.video-frame');
const ratio = 9 / 16; // or detect dynamically if you know the video
iframe.style.height = iframe.offsetWidth * ratio + 'px';
