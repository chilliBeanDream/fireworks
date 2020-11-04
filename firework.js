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
    console.log(this.debris);
  } else {
    this.counter++;
  }
};

function randomPrimaryColor() {
  const col = 200;
  let r = 0;
  let g = 0;
  let b = 0;
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      r = col;
      g = 0;
      b = 0;
      break;
    case 1:
      r = 0;
      g = col;
      b = 0;
      break;
    case 2:
      r = 0;
      g = 100;
      b = col;
      break;
  }

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

function randomIntBetween(low, high) {
  return Math.floor(low + (high - low) * Math.random());
}
