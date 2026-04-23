const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 100; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    dx: Math.random() - 0.5,
    dy: Math.random() - 0.5
  });
}

let mouse = { x: 0, y: 0 };

window.addEventListener("mousemove", e => {
  mouse.x = e.x;
  mouse.y = e.y;
});

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    p.x += p.dx;
    p.y += p.dy;

    ctx.beginPath();
    ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
    ctx.fillStyle = "#00ffcc";
    ctx.fill();

    // connect to mouse
    let dist = Math.hypot(p.x - mouse.x, p.y - mouse.y);

    if (dist < 40) {
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(mouse.x, mouse.y);
      ctx.strokeStyle = "#00ffcc";
      ctx.stroke();
    }
  });

  requestAnimationFrame(animate);
}

animate();
