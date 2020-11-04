function setup() {
  createCanvas(600, 600);

  const sun = new Body(400, relativeVector(0, 0), createVector(0, -0.76));

  const earth = new Body(80, relativeVector(100, 0), createVector(0, 2));

  const moon = new Body(50, relativeVector(150, 0), createVector(0, 3));

  // const earth = new Body(20, relativeVector(150, 50), createVector(1,-1));
  // const mars = new Body(260, relativeVector(100, 100), createVector(-0,0));
  // const jupiter = new Body(21, relativeVector(50, 150), createVector(-1,1));
  // const earth = new Body(20, relativeVector(150, 50), createVector(1,-1));
  // const mars = new Body(260, relativeVector(100, 100), createVector(-0,0));
  // const jupiter = new Body(100, relativeVector(50, 150), createVector(-1,1));
  // const saturn = new Body(30, relativeVector(-50, 0), createVector(0,0.5));
  system = new System([sun, earth, moon]);
}

function relativeVector(x,y) {
  const origin = createVector(300, 300);
  return origin.add(createVector(x,-y));
}

function draw() {
  background(50);
  system.run();
}
