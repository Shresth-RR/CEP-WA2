class Sun {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.mass = 5000;
  }

  display() {
    noStroke();
    fill(255, 204, 0);
    ellipse(this.pos.x, this.pos.y, 60);
  }

  attract(planet) {
    let force = p5.Vector.sub(this.pos, planet.pos);
    let distance = constrain(force.mag(), 50, 500);
    force.normalize();
    let strength = (this.mass * planet.mass) / (distance * distance);
    force.mult(strength);
    planet.applyForce(force);
  }
}
