let small = 25;
let big = 50;

let xOffset = 50;
let xSpacing = 50;

let yOffset = 50;
let ySpacing = 50;



function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(234, 215, 0);
  fill(0);

  for (let xPos = 0; xPos <= width ; xPos += xSpacing) {
    for (let yPos = 0; yPos <= height ; yPos += ySpacing) {

        ellipse(xPos, yPos, small, small);
    }
  
  }

  for (let xPos = 0; xPos <= width ; xPos += 100) {
    for (let yPos = 0; yPos <= height ; yPos += 100) {

        ellipse(xPos, yPos, big, big);
    }
  
  }

  for (let xPos = 50; xPos <= width ; xPos += 100) {
    for (let yPos = 50; yPos <= height ; yPos += 100) {

        ellipse(xPos, yPos, big, big);
    }
  
  }
}

