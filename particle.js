const Particle = function(position, velocity, color) {
  this.name = Math.floor(Math.random() * 30);
  this.position = position;
  this.velocity = velocity;
  this.color = color;
  this.history = [];
};

Particle.prototype.draw = function () {
  this.update();
  this.drawPoint();
  this.drawPath();
};

Particle.prototype.drawPoint = function () {
  stroke(this.color);
  fill(this.color);
  ellipse(this.position.x, this.position.y, 1);
};

Particle.prototype.update = function () {
  const acceleration = createVector(0, -0.01);
  this.velocity.add(acceleration);
  this.position.add(this.velocity);
  this.updateHistory();
};

Particle.prototype.updateHistory = function() {
  const x = this.position.x;
  const y = this.position.y;
  this.history.push({x, y});
  if (this.history.length > 50) {
    this.history.splice(0,1);
  }
};

Particle.prototype.drawPath = function() {
  for (let i = 1; i < this.history.length; i++) {
    const color = this.color;
    color.setAlpha(150 * i / this.history.length);
    stroke(color);
    const pos = this.history[i];
    const previousPos = this.history[i-1];
    line(pos.x, pos.y, previousPos.x, previousPos.y);
  }
};
