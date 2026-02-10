let sun;
let planets = [];
let stars = [];
let animatedStars = [];
let blackHole = null;
let swallowedCount = 0;
let maxSwallowed = 5;
let blackHoleActive = false;
let currentYear = 2025;
let yearTimer = 0;

function setup() {
  createCanvas(800, 600);
  sun = new Sun(width / 2, height / 2);

  for (let i = 0; i < 100; i++) {
    stars.push(new Star());
  }
  animatedStars = [random(stars), random(stars)];
}

function draw() {
  background(0);

  // Advance year every 60 frames (~1 second)
  yearTimer++;
  if (yearTimer >= 60) {
    currentYear++;
    yearTimer = 0;
  }

  // Display year (top right)
  fill(255);
  noStroke();
  textSize(16);
  textAlign(RIGHT, TOP);
  text(currentYear + " AD", width - 10, 10);

  // Display instructions (top left)
  textAlign(LEFT, TOP);
  text("Click to add planets\nPress 'C' to combine stars\nand form a black hole", 10, 10);

  // Stars
  for (let s of stars) s.display();
  for (let s of animatedStars) s.animate();

  // Sun
  sun.display();

  // Planets
  for (let p of planets) {
    if (blackHoleActive && blackHole && blackHole.active) {
      blackHole.affect(p);
    } else {
      sun.attract(p);
    }
    p.update();
    p.display();
  }

  // Remove swallowed planets
  planets = planets.filter(p => !p.swallowed);

  // Black hole
  if (blackHoleActive && blackHole) {
    blackHole.display();
    if (swallowedCount >= maxSwallowed) {
      blackHole.deactivate();
      blackHoleActive = false;
      blackHole = null;
      swallowedCount = 0;
    }
  }
}

function mousePressed() {
  planets.push(new Planet(mouseX, mouseY));
}

function keyPressed() {
  if (key === 'C' || key === 'c') {
    if (!blackHoleActive) {
      let pos = p5.Vector.lerp(animatedStars[0].pos, animatedStars[1].pos, 0.5);
      blackHole = new BlackHole(pos.x, pos.y);
      blackHoleActive = true;
    }
  }
}
