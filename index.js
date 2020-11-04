const BG_COLOUR = '#222222';

function setup() {
  createCanvas(600, 400);

  firework = new Firework();
}

function draw() {
  background(BG_COLOUR);
  translate(300, 400);
  scale(1, -1);

  firework.fire();
}
