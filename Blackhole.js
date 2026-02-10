class BlackHole {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.mass = 10000;
    this.radius = 40;
    this.active = true;
  }

  affect(planet) {
    if (!this.active) return;

    let dir = p5.Vector.sub(this.pos, planet.pos);
    let d = dir.mag();

    if (d < this.radius) {
      planet.swallowed = true;
      swallowedCount++;
      return;
    }

    dir.normalize();
    let force = (this.mass * planet.mass) / (d * d);
    dir.mult(force);
    planet.applyForce(dir);
  }

  display() {
    if (!this.active) return;
    noFill();
    stroke(200, 0, 255);
    strokeWeight(2);
    ellipse(this.pos.x, this.pos.y, this.radius * 2);
  }

  deactivate() {
    this.active = false;
  }
}
