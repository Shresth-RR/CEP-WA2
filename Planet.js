class Planet {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(-(y - height / 2), x - width / 2).setMag(random(1, 2));
    this.acc = createVector();
    this.mass = random(5, 15);
    this.r = this.mass * 2;
    this.color = color(random(100, 255), random(100, 255), random(100, 255));
    this.trail = [];
    this.swallowed = false;
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }

  orbit(sun) {
    sun.attract(this);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);

    this.trail.push(this.pos.copy());
    if (this.trail.length > 50) this.trail.shift();
  }

  display() {
    noFill();
    stroke(this.color);
    beginShape();
    for (let v of this.trail) vertex(v.x, v.y);
    endShape();

    noStroke();
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.r);
  }
}
