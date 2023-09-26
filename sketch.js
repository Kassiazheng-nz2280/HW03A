let cDiam1 = 30;
let cDiam2 = 5;

let xOffset = 50;
let xSpacing = 50;

let yOffset = 50;
let ySpacing = 50;

function setup() {
}


function draw() {
  background(238, 219, 3);

  for (let xPos = xOffset; xPos <= width - xOffset; xPos += xSpacing) {
    for (let yPos = yOffset; yPos <= height - yOffset; yPos += ySpacing) {
      ellipse(xPos, yPos, cDiam2 + xPos / 17);
      ellipse(xPos, yPos, cDiam1 + xPos / 33);
      fill(20);
    }
  }
}
