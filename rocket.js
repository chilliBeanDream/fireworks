const Rocket = function() {
  this.position = randomStartPosition();
  this.velocity = randomStartVelocity();
  this.fuseTime = 10;
  this.history = [];
};

Rocket.prototype.fire = function () {
  this.update();
  this.draw();
  this.drawPath();
};

// Drawing the body

Rocket.prototype.draw = function () {
  stroke(60);
  fill(color(60));
  ellipse(this.position.x, this.position.y, 1);
};

Rocket.prototype.update = function() {
  const acceleration = createVector(0, -0.01);
  this.velocity.add(acceleration);
  this.position.add(this.velocity);
  this.updateHistory();
};

Rocket.prototype.updateHistory = function() {
  const x = this.position.x;
  const y = this.position.y;
  this.history.push({x, y});
  if (this.history.length > 50) {
    this.history.splice(0,1);
  }
};

Rocket.prototype.drawPath = function() {
  for (let i = 1; i < this.history.length; i++) {
    stroke(30 * i / this.history.length + 30);
    const pos = this.history[i];
    const previousPos = this.history[i-1];
    line(pos.x, pos.y, previousPos.x, previousPos.y);
  }
};

function randomStartPosition() {
  const x = 60 * randomSigned();
  return createVector(x, 0)
}

function randomStartVelocity() {
  const xv = 0.3 * randomSigned();
  const yv = 2 + 0.5 * randomSigned();
  return createVector(xv, yv)
}

function randomSigned() {
  return 1 - (2 * Math.random());
}
