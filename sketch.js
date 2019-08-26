/* eslint-disable */

let ellipses = [];
let count = 1000;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  noStroke();

  for (let n = 0; n < count; n++) {
    ellipses.push(makeEllipse());
  }
}

function draw() {
  background("orange");
  ellipses.forEach(ellipse => {
    ellipse.move();
    ellipse.checkBounds();
    ellipse.draw();
  });
}

function makeEllipse() {
  return {
    position: { x: width / 2, y: height / 2 }, // every ellipse starts at the center
    velocity: { x: random(-1, 1), y: random(-1, 1) },
    diameter: 0.1 * width,
    fillColor: color(random(0, 60), 100, 100, 0.5),
    move: move,
    draw: drawEllipse,
    checkBounds: checkBounds
  };
}

function drawEllipse() {
  fill(this.fillColor);
  ellipse(this.position.x, this.position.y, this.diameter, this.diameter);
}

function move() {
  this.position.x += this.velocity.x;
  this.position.y += this.velocity.y;
}

function checkBounds() {
  if (
    this.position.x >= width - this.diameter / 2 ||
    this.position.x <= this.diameter / 2
  ) {
    this.velocity.x *= -1;
  }

  if (
    this.position.y >= height - this.diameter / 2 ||
    this.position.y <= this.diameter / 2
  ) {
    this.velocity.y *= -1;
  }
}
