function setup() {
  createCanvas(600, 450);
  noLoop();
  angleMode(DEGREES);
  smooth();
}

let choice = false;
let showBall = false; // 당첨공 보여주기
let angle = -135;
let movingBall_x = 410;

function draw() {
  // 배경
  background(227, 255, 255);
  fill(181, 255, 255);
  noStroke();
  quad(80, 320, 600, 320, 600, 420, 20, 420);
  fill(136, 252, 252);
  rect(20, 420, 580, 30);

  // 로또 통
  fill(213, 168, 255);
  stroke(213, 168, 255);
  strokeWeight(5);
  circle(400, 220, 280);
  noFill();
  arc(400, 220, 355, 355, 270, 90, OPEN);
  line(180, 360, 400, 360);
  line(180, 397, 400, 397);
  stroke(196, 133, 255);
  strokeWeight(7);
  arc(400, 220, 367, 367, 270, 90, OPEN);
  fill(225, 191, 255);
  line(180, 403, 400, 403);
  stroke(225, 191, 255);
  circle(400, 220, 230);
  fill(233, 209, 255);
  stroke(233, 209, 255);
  circle(400, 220, 180);
  rect(385, 52, 35, 265, 5);

  // 굴러 내려오는 공
  if(choice) {
    loop();
    push();
    translate(400, 220);
    rotate(angle);
    if(angle > 40){
      noFill(); // 사라진 척
      noStroke();
    } else {
      fill(200);
      noStroke();
    }
    circle(113, 113, 30);
    pop();

    angle = angle + 1;

    if (angle > 40){
      movingBall_x = movingBall_x - 2;
      // console.log("movingBall_x = " + movingBall_x);
      fill(200);
      noStroke();
      circle(movingBall_x, 379, 30);
      if(movingBall_x === 190) {
        // noLoop();
        choice = true;
        circle(movingBall_x, 379, 30); // 그 자리에 고정
        showBall = true;
        // fill(0);
        // circle(150, 225, 100);
        noLoop();
      }
    }
  }

  // fill(255);
  noStroke();

  // 노란 공
  for(let i=1; i<12; i++) {
    let ball_X = int(random(320, 480));
    let ball_Y = int(random(120, 320));
    fill(242, 237, 87);
    noStroke();
    circle(ball_X, ball_Y, 30);
    push();
    translate(ball_X-8, ball_Y-8);
    rotate(40);
    fill(227, 227, 227);
    ellipse(0, 0, 4, 10);
    pop();
    textSize(18);
    fill(0);
    text(i, ball_X-8, ball_Y+8);
  }

  // 초록 공
  for(let i=12; i<23; i++) {
    let ball_X = int(random(320, 480));
    let ball_Y = int(random(120, 320));
    fill(89, 219, 46);
    noStroke();
    circle(ball_X, ball_Y, 30);
    push();
    translate(ball_X-8, ball_Y-8);
    rotate(40);
    fill(227, 227, 227);
    ellipse(0, 0, 4, 10);
    pop();
    textSize(18);
    fill(0);
    text(i, ball_X-8, ball_Y+8);
  }

  // 파란 공
  for(let i=23; i<34; i++) {
    let ball_X = int(random(320, 480));
    let ball_Y = int(random(120, 320));
    fill(87, 120, 212);
    noStroke();
    circle(ball_X, ball_Y, 30);
    push();
    translate(ball_X-8, ball_Y-8);
    rotate(40);
    fill(227, 227, 227);
    ellipse(0, 0, 4, 10);
    pop();
    textSize(18);
    fill(0);
    text(i, ball_X-8, ball_Y+8);
  }

  // 빨간 공
  for(let i=34; i<45; i++) {
    let ball_X = int(random(320, 480));
    let ball_Y = int(random(120, 320));
    fill(222, 76, 18);
    noStroke();
    circle(ball_X, ball_Y, 30);
    push();
    translate(ball_X-8, ball_Y-8);
    rotate(40);
    fill(227, 227, 227);
    ellipse(0, 0, 4, 10);
    pop();
    textSize(18);
    fill(0);
    text(i, ball_X-8, ball_Y+8);
  }
}

function mousePressed() {
  loop();
  choice = false;
  console.log("choice while mousePressed = " + choice);
}

function mouseReleased() {
  choice = true;
}

function keyPressed() {
  if(choice === true && keyCode === RETURN){ // 당첨공 보여주기
    let colorR = [242, 89, 87, 222];
    let colorG = [237, 219, 120, 76];
    let colorB = [87, 46, 212, 18];
    let randomColor = int(random(0, 4));
    let randomNum = int(random(0, 45));
    fill(colorR[randomColor], colorG[randomColor], colorB[randomColor]);
    noStroke();
    circle(150, 225, 100);
    push();
    translate(125, 200);
    rotate(40);
    fill(227, 227, 227);
    ellipse(0, 0, 10, 25);
    pop();
    textSize(30);
    fill(0);
    text(randomNum, 138, 235);
  } else {
    redraw();
    noLoop();
    choice = false;
    showBall = false;
    angle = -135;
    movingBall_x = 410;
    console.log("new game");
  }
}
