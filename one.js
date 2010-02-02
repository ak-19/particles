var canvas = document.createElement('canvas');
canvas.setAttribute('width', 1200);
canvas.setAttribute('height', 800);
canvas.style = 'background: aqua';
document.body.appendChild(canvas);

var ctx = canvas.getContext('2d');

var particles = [];
var numParticles = 100;

function Particle(x, y, vx, vy) {
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
}

Particle.prototype.update = function() {
  this.x += this.vx;
  this.y += this.vy;
  if (this.x < 0 || this.x > canvas.width) {
    this.vx = -this.vx;
  }
  if (this.y < 0 || this.y > canvas.height) {
    this.vy = -this.vy;
  }
};

Particle.prototype.draw = function() {
  ctx.beginPath();
  ctx.arc(this.x, this.y, 5, 0, Math.PI * 2);
  ctx.fillStyle = 'white';
  ctx.fill();
};

for (var i = 0; i < numParticles; i++) {
  var x = Math.random() * canvas.width;
  var y = Math.random() * canvas.height;
  var vx = Math.random() * 10 - 5;
  var vy = Math.random() * 10 - 5;
  particles.push(new Particle(x, y, vx, vy));
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < numParticles; i++) {
    particles[i].update();
    particles[i].draw();
  }
  requestAnimationFrame(draw);
}

draw();