const BG_COLOUR = '#222222';

function setup() {
  createCanvas(600, 400);

  fireworks = [];

  for (let i = 0; i < 10; i++) {
    fireworks.push(new Firework());
  }
}

function draw() {
  background(BG_COLOUR);
  translate(300, 400);
  scale(1, -1);

  for (let i = 0; i < fireworks.length; i++){
    fireworks[i].fire();
  }
}
