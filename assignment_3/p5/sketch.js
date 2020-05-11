let fontBold, fontExtraBold;
let firstDice = 4;
let secondDice = 3;
let rollDice = false;
let goColor = 'green';

let go_X;
let go_Y;

function preload(){
  fontBold = loadFont('assets/Kanit-Bold.ttf');
  fontExtraBold = loadFont('assets/Kanit-ExtraBold.ttf');
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  // if(frameCount % 5 === 0) {
  //   console.log("count");
  // }
  background(80, 65, 131)
  fill(245, 241, 230);
  stroke(117, 77, 25);
  angleMode(DEGREES);
  // beige cards
  rectMode(CENTER);
  push();
  translate(0, 430);
  rotate(-80);
  rect(0, 0, 200, 320, 15);
  pop();
  push();
  translate(85, 380);
  rotate(-60);
  rect(0, 0, 200, 320, 15);
  pop();
  // pink cards
  rectMode(CORNER);
  fill(255, 210, 196);
  push();
  translate(500, 170);
  rotate(15);
  rect(0, 0, 220, 300, 15);
  pop();
  push();
  translate(400, 510);
  rotate(25);
  rect(0, 0, 220, 300, 15);
  pop();
  // green board
  rectMode(CENTER);
  fill(27, 165, 98); // green
  stroke(117, 77, 25);
  strokeWeight(1);
  // quad(100, 0, 600, 0, 600, 100, 300, 300);
  push();
  translate();
  rotate(-34);
  drawingContext.shadowOffsetX = -5;
  drawingContext.shadowOffsetY = 5;
  drawingContext.shadowBlur = 20;
  drawingContext.shadowColor = 'black';
  rect(235, 265, 700, 700);

  pop();
  // lines on green board
  stroke(200);
  strokeWeight(0.5);
  for(let i=0; i<13; i++) {
      line(140+(i*40), 0, 340+(i*40), 300)
  }
  for(let i=0; i<10; i++) {
    line(110+(i*20), 30+(i*32), 160+(i*67), 0);
  }
  // dices
  if(rollDice) {

  } else {
    drawingContext.shadowOffsetX = 3;
    drawingContext.shadowOffsetY = 3;
    drawingContext.shadowBlur = 10;
    drawingContext.shadowColor = 'black';
    push();
    fill(250);
    translate(280, 100);
    rotate(-10);
    rect(0, 0, 80, 80, 10);
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 0;
    drawingContext.shadowBlur = 0;
    fill(27, 165, 98); // green
    circle(-18, -18, 15);
    circle(18, -18, 15);
    circle(18, 18, 15);
    circle(-18, 18, 15);
    pop();
    push();
    fill(250);
    translate(420, 140);
    rotate(-40);
    rect(0, 0, 80, 80, 10);
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 0;
    drawingContext.shadowBlur = 0;
    fill(27, 165, 98); // green
    circle(-18, -18, 15);
    circle(0, 0, 15);
    circle(18, 18, 15);
    pop();
  }


  // remove shadow
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowBlur = 0;

  // each board cell
  stroke(117, 77, 25);
  strokeWeight(2);
  push();
  fill(237, 233, 213); // beige
  translate(-14, 12);
  rotate(-34);
  rect(0, 0, 200, 170);
  translate(0, 165);
  rect(0, 0, 200, 160);

  fill(250, 108, 42); // red
  translate(0, 165);
  rect(0, 0, 200, 170);

  fill(132, 82, 131); // purple
  translate(0, 185);
  rect(0, 0, 200, 200);
    push();
    translate(0, -10);
    goColor === 'green' ? fill(250, 108, 42) : fill(27, 165, 98); // red & green
    circle(0, 0, 130);
    goColor === 'green' ? fill(237, 233, 213) : fill(255, 250, 107); // beige & yello
    circle(0, 0, 110);
    translate(-120, 0);

    goColor === 'green' ? fill(27, 165, 98) : fill(250, 108, 42); // green or red
    textSize(50);
    textFont(fontExtraBold);
    text('GO!', 80, 20);
    translate(0, 90);
    fill(237, 233, 213); // beige (text)
    textSize(35);
    text('05.13', 80, 10);
    fill(255, 250, 107); // yellow (arrow)
    noStroke();
    translate(120, -165);
    rect(0, 0, 15, 20);
    translate(0, -50);
    triangle(0, 0, 20, 40, -20, 40);
    pop();
  fill(255, 250, 107); // yellow
  translate(185, 0);
  rect(0, 0, 170, 200);
    push();
    fill(77, 8, 70);
    circle(7, 32, 120);
    fill(255, 210, 196);
    circle(0, 25, 120);
    fill(77, 8, 70);
    circle(0, 20, 45);
    arc(0, 20, 125, 125, 50, 130);
    pop()
  fill(237, 233, 213); // beige
  translate(170, 0);
  rect(0, 0, 170, 200);
    push();
    fill(255, 250, 107); // yellow
    triangle(0, -90, -60, 60, 60, 60);
    fill(250, 108, 42); // red
    ellipse(0, 60, 120, 30);
    pop();
  pop();
  // board cell deco 1
  push();
  fill(250, 108, 42); // red
  translate(50, -32);
  rotate(-34);
  rect(0, 0, 45, 170);
  translate(0, 166);
  rect(0, 0, 45, 160);
    // airplane
    push();
    fill(27, 165, 98); // green
    quad(-80, -30, -70, -35, -40, 0, -65, 0);
    quad(-40, -50, -25, -55, 40, -10, 0, -5);
    quad(-10, 8, 15, 5, -5, 60, -20, 60);
    fill(250); // white
    rotate(-10);
    ellipse(55, -8, 50, 33);
    rotate(10);
    quad(-70, -5, 50, -35, 50, 0, -70, 15);
    noStroke();
    quad(-40, -3, 52, -34, 52, -1, -40, 10);
    fill(167, 214, 213); // sky blue
    stroke(117, 77, 25);
    for(let i=0; i<6; i++) {
      circle(-35+(i*12), -5-(i*3), 8);
    }
    rotate(15);
    ellipse(52, -44, 26, 10);
    pop();
    // clouds
    push();
    fill(237, 233, 213); // beige
    translate(-100, -5);
    circle(-45, 30, 65);
    noStroke();
    rect(-45, 45, 60, 50);
    stroke(117, 77, 25);
    circle(60, 58, 55);
    circle(30, 30, 60);
    circle(-14, 40, 30);
    circle(-25, 60, 48);
    noStroke();
    rect(20, 60, 100, 50);
    fill(117, 77, 25);
    textSize(20);
    textFont(fontBold);
    text('AIRPORT', -50, -45);
    pop();
  fill(255, 250, 107); // yellow
  translate(0, 164);
  rect(0, 0, 45, 170);
    // nonstop sign
    push();
    fill(27, 165, 98); // green
    translate(-120, 20);
    triangle(0, -120, -70, 0, 70, 0);
    translate(10, 0);
    triangle(0, -120, -70, 0, 70, 0);
    fill(237, 233, 213); // beige
    triangle(0, -100, -55, -10, 55, -10);
    rect(-5, 34, 20, 68);
    rect(0, 34, 15, 68);
    fill(117, 77, 25);
    textSize(20);
    textFont(fontBold);
    text('NON', -20, -45);
    text('STOP', -20, -25);
    pop();
  pop();
  // board cell deco 2
  push();
  fill(132, 82, 131); // purple
  translate(386, 274);
  rotate(-34);
  rect(0, 0, 170, 50);
  fill(255, 250, 107); // yellow
  textSize(30);
  textFont(fontBold);
  text('JI EUN', -45, 10);
  fill(250, 108, 42); // red
  translate(170, 0);
  rect(0, 0, 170, 50);
  fill(117, 77, 25);
  textSize(18);
  textFont(fontBold);
  text('CONCERT', -40, 55);
  text('HALL', -22, 75);
  fill(250, 108, 42); // red
  translate(170, 0);
  rect(0, 0, 170, 50);
  pop();

  if(205 <= mouseX && mouseX <= 335 && 365 <= mouseY && mouseY <= 495) {
    goColor = 'red';
  } else {
    goColor = 'green';
  }
}

function mousePressed() {
  let d = int(dist(270, 430, mouseX, mouseY));
  if(d < 65) {
    rollDice = !rollDice;
  }
}
