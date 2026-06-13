const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');

// Only dark cyan blue and white
const COLORS = ['#00bcd4', '#ffffff'];

let stars = [];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initStars();
}

function initStars() {
  const W = canvas.width, H = canvas.height;
  // Reduce density significantly
  const COUNT = Math.floor((W * H) / 900); 
  stars = [];
  for (let i = 0; i < COUNT; i++) {
    stars.push({
      x: Math.random() * W,
      y: Math.random() * H,
      size: Math.random() * 0.97 + 0.1,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: Math.random(),
      speed: Math.random() * 0.09 + 0.05,
      phase: Math.random() * Math.PI * 2,
      spike: Math.random() > 0.91, // fewer spikes but uneven
      spikeSize: Math.random() * 4.5 + 3.5 // longer sparkling corners
    });
  }
}

function drawStar(x, y, size, color, alpha, spike, spikeSize) {
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fill();
  if (spike && alpha > 0.4) {
    ctx.strokeStyle = color;
    ctx.globalAlpha = alpha * 0.7;
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    ctx.moveTo(x - spikeSize, y); ctx.lineTo(x + spikeSize, y); ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y - spikeSize); ctx.lineTo(x, y + spikeSize); ctx.stroke();
  }
  ctx.restore();
}

let t = 0;
function animate() {
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (const s of stars) {
    const a = 0.1 + 0.9 * (0.5 + 0.5 * Math.sin(t * s.speed + s.phase));
    drawStar(s.x, s.y, s.size, s.color, a, s.spike, s.spikeSize);
  }
  t += 2.2;
  requestAnimationFrame(animate);
}

resize();
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(resize, 100);
});
animate();
