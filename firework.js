const Firework = function () {
  this.counter = 0;
  this.fuseTime = randomIntBetween(80, 140);
  this.rocket = new Particle(
    randomStartPosition(),
    randomStartVelocity(),
    color(60),
  );
  this.explosionColor = randomPrimaryColor();
  this.debris = [];
};

Firework.prototype.fire = function () {
  this.explodeIfTime();
  if (this.debris.length) {
    for (let i = 0; i < this.debris.length; i++) {
      const deb = this.debris[i];
      deb.draw();
    }
  } else {
    this.rocket.draw();
  }
};

Firework.prototype.explodeIfTime = function () {
  if (this.counter > this.fuseTime && !this.debris.length) {
    const numberOfDebris = randomIntBetween(8, 16);
    const angle = Math.floor(360.0 / numberOfDebris);
    for (let i = 0; i < numberOfDebris; i++) {
      const ip = createVector(this.rocket.position.x, this.rocket.position.y);
      const iv = p5.Vector.fromAngle(radians(angle * i), 0.5);
      this.debris.push(new Particle(ip, iv, this.explosionColor));
    }
  } else {
    this.counter++;
  }
};

function randomPrimaryColor() {
  fireworkColors = [
      color(176, 28, 217),
      color(176, 28, 217),
      color(255, 53, 31),
      color(255, 195, 31),
      color(89, 209, 25),
      color(25, 117, 209),
  ];

  return fireworkColors[randomIntBetween(0, fireworkColors.length)]
}

function randomStartPosition() {
  const x = 50 * randomSigned();
  return createVector(x, 0)
}

function randomStartVelocity() {
  const xv = 0.8 * randomSigned();
  const yv = 2 + 0.7 * randomSigned();
  return createVector(xv, yv)
}

function randomSigned() {
  return 1 - (2 * Math.random());
}

function randomIntBetween(low, high) {
  return Math.floor(low + (high - low) * Math.random());
}
