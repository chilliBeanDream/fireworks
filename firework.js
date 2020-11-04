const Firework = function () {
  this.counter = 0;
  this.fuseTime = 90;
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
    const numberOfDebris = randomInt();
    const angle = Math.floor(360.0 / numberOfDebris);
    for (let i = 0; i < numberOfDebris; i++) {
      const ip = createVector(this.rocket.position.x, this.rocket.position.y);
      const iv = p5.Vector.fromAngle(radians(angle * i), 0.5);
      this.debris.push(new Particle(ip, iv, this.explosionColor));
    }
    console.log(this.debris);
  } else {
    this.counter++;
  }
};

function randomPrimaryColor() {
  const r = 200;
  const g = 0;
  const b = 0;
  return color(r, g, b)
}

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

function randomInt() {
  return Math.floor(5 + 10 * Math.random());
}
