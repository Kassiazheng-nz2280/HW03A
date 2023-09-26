let cDiam = 25;
let num = 0
let xOffset = 50;
let xSpacing = 50;

let yOffset = 50;
let ySpacing = 50;



function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(234, 215, 0);
  

  for (let xPos = 0; xPos <= width ; xPos += xSpacing) {
    for (let yPos = 0; yPos <= height ; yPos += ySpacing) {
    if (xPos =xOffset + num * xSpacing){

      ellipse(xPos, yPos, 100,100)}

      else  {
        ellipse(xPos, yPos, 50,50)}
        
    
       
      fill(0);
    }
    num++;
  }
}

