class Star {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.baseSize = random(1, 3);
    this.brightness = random(100, 255);
    this.pulsing = false;
    this.phase = random(TWO_PI);
  }

  display() {
    noStroke();
    fill(this.brightness);
    ellipse(this.pos.x, this.pos.y, this.baseSize);
  }

  animate() {
    let size = this.baseSize + sin(frameCount * 0.1 + this.phase) * 2;
    fill(255, 255, 150);
    ellipse(this.pos.x, this.pos.y, size);
  }
}
