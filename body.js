const Body = function(mass, position, velocity) {
  this.mass = mass;
  this.position = position;
  this.velocity = velocity;
  this.history = [];
}

// Drawing the body

Body.prototype.draw = function () {
  stroke(100);
  strokeWeight(1);
  fill(this.getFillColor());
  ellipse(this.position.x, this.position.y, Math.pow(this.mass, 0.25)*8, Math.pow(this.mass, 0.25)*8);
};

Body.prototype.drawPath = function() {
  for (let i = 1; i < this.history.length; i++) {
    stroke(150 * i / this.history.length + 50);
    const pos = this.history[i];
    const previousPos = this.history[i-1];
    line(pos.x, pos.y, previousPos.x, previousPos.y);
  }
}

Body.prototype.getFillColor = function() {
  const red = Math.abs(176 + (this.mass % 29) * (this.mass % 13)) % 256;
  const green = Math.abs(47 + (this.mass % 17) * (this.mass % 19)) % 256;
  const blue = Math.abs(300 - red - green) % 256;
  return color(red, green, blue);
}

Body.prototype.updateHistory = function() {
  const x = this.position.x;
  const y = this.position.y;
  this.history.push({x, y});
  if (this.history.length > 200) {
    this.history.splice(0,1);
  }
}

Body.prototype.update = function(acceleration) {
  this.acceleration = acceleration;
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.updateHistory();
}
