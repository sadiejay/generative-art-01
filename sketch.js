function setup() {
  createCanvas(600, 600);
  background(333);
}

function draw() {
  if (mouseIsPressed) {
    fill((256), random(256),random (200));
    ellipse(mouseX, mouseY, 77, 77);
  }
  
  if (keyIsPressed) {
    background(333);
  }
}
