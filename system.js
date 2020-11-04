const System = function(bodyList) {
  this.bodyList = bodyList;
}

System.prototype.run = function() {
  const accelerationList = [];
  for (let i = 0; i < this.bodyList.length; i++) {
    const body = this.bodyList[i];
    body.drawPath()
    accelerationList.push(this.calculateAcceleration(body));
  }
  for (let i = 0; i < this.bodyList.length; i++) {
    const body = this.bodyList[i];
    body.update(accelerationList[i]);
    body.draw();
  }
}

System.prototype.calculateAcceleration = function(body) {
  const otherBodies = this.bodyList.filter(b => b !== body);
  let acceleration = createVector(0,0);
  for (let j = 0; j < otherBodies.length; j++) {
    otherBody = otherBodies[j];
    const radius = body.position.dist(otherBody.position);
    const ac = p5.Vector.sub(otherBody.position, body.position).normalize().div(50);
    const accelerationDueToOtherBody = p5.Vector.div(p5.Vector.mult(ac, otherBody.mass), radius^2);
    acceleration.add(accelerationDueToOtherBody);
  }
  return acceleration;
}
