function preload(){
}

function setup() {
  createCanvas(800, 600);
  background(225); // 나중에 지워주기

}

function draw() {
  // 우측 아래 바닥
  noStroke();
  fill(204, 147, 126);
  rect(530, 450, 270, 30);
  rect(530, 515, 270, 35);
  fill(59, 191, 149);
  rect(530, 480, 270, 35);
  rect(530, 550, 270, 50);

  // 갈색 배경들 & 우측 계단
  fill(237, 186, 149);
  noStroke();
  triangle(0, 0, 200, 0, 200, 10);
  fill(120, 79, 64);
  quad(660, 220, 800, 420, 800, 440, 660, 240);
  noStroke();
  quad(0, 0, 200, 10, 200, 70, 0, 60);
  rect(530, 220, 130, 30);
  fill(158, 121, 76);
  rect(530, 250, 130, 70);
  quad(660, 240, 800, 440, 800, 470, 660, 270);
  fill(47, 196, 52);
  noStroke();
  rect(200, 0, 80, 80);
  circle(200, 30, 60);
  circle(210, 60, 60);
  circle(240, 70, 60);
  circle(260, 70, 60);

  // 우측 배경 울타리
  fill(153, 152, 148);
  rect(530, 90, 130, 20);
  rect(530, 160, 130, 20);
  quad(660, 90, 800, 310, 800, 330, 660, 110);
  quad(660, 160, 800, 380, 800, 400, 660, 180);
  stroke(128, 126, 122);
  strokeWeight(1);
  circle(557, 80, 14);
  rect(550, 80, 14, 120);
  circle(587, 80, 14);
  rect(580, 80, 14, 120);
  circle(617, 80, 14);
  rect(610, 80, 14, 120);
  rect(640, 70, 14, 150);
  circle(677, 100, 14);
  rect(670, 100, 14, 120);
  circle(707, 140, 14);
  rect(700, 140, 14, 120);
  circle(737, 180, 14);
  rect(730, 180, 14, 120);
  circle(767, 220, 14);
  rect(760, 220, 14, 120);
  circle(797, 260, 14);
  rect(790, 260, 14, 120);

  // 우측 바위
  rect(550, 350, 70, 40, 10);
  rect(530, 390, 100, 60, 10);
  rect(630, 370, 50, 80, 10);

  // 청록색 미끄럼틀
  fill(66, 201, 186);
  noStroke();
  arc(405, 100, 200, 200, radians(220), radians(320), OPEN);
  rect(300, 20, 210, 300, 5);
  quad(300, 320, 510, 320, 520, 600, 280, 600, 5);
  stroke(59, 179, 165);
  line(300, 310, 330, 300);
  line(480, 300, 510, 310);
  line(320, 305, 300, 600);
  line(490, 305, 500, 600);
  // 뒤에 칙칙한 노란색 판
  fill(245, 222, 98);
  noStroke();
  rect(330, 100, 150, 200, 5);
  arc(405, 147, 175, 175, radians(210), radians(330), OPEN);
  rect(292, 30, 8, 300);
  rect(510, 30, 10, 300);
  // 그곳에 원형 배경
  fill(215);
  noStroke();
  circle(415, 180, 130, 130);
  fill(214, 152, 28);

  // 가장 앞 노란색 판
  fill(255, 224, 51);
  noStroke();
  rect(20, 100, 250, 350, 10);
  arc(145, 230, 300, 300, radians(240), radians(300), OPEN);
  fill(240, 124, 120);
  ellipse(130, 135, 15, 30);
  fill(255, 224, 51);
  stroke(240, 124, 120);
  ellipse(110, 140, 13, 30);
  ellipse(150, 140, 13, 30);
  fill(240, 124, 120);
  arc(175, 220, 160, 160, radians(230), radians(310), CHORD);
  fill(255, 224, 51);
  stroke(240, 124, 120);
  strokeWeight(2);
  arc(130, 232, 170, 170, radians(240), radians(300), CHORD);
  // 노란 구슬판 밑에 받침
  fill(163, 162, 158);
  noStroke();
  quad(20, 450, 290, 450, 290, 480, 0, 480);
  rect(0, 480, 290, 15);
  fill(74, 74, 74);
  triangle(0, 495, 60, 495, 0, 540);
  rect(60, 495, 15, 50);
  rect(0, 540, 290, 105);

  // 파란 기둥들
  fill(40, 45, 181);
  noStroke();
  rect(0, 100, 12, 380);
  circle(6, 100, 12);
  rect(10, 110, 20, 10);
  circle(30, 115, 10);
  rect(10, 430, 20, 10);
  circle(30, 435, 10);
  rect(260, 110, 20, 10);
  circle(260, 115, 10);
  rect(260, 430, 20, 10);
  circle(260, 435, 10);
  rect(280, 0, 12, 600);
  rect(290, 25, 20, 10);
  circle(310, 30, 10);
  rect(290, 320, 10, 10);
  rect(500, 25, 20, 10);
  circle(500, 30, 10);
  rect(510, 320, 20, 10);
  rect(520, 0, 12, 600);

  // 구슬 들어갈 네모 구멍
  fill(245);
  stroke(0);
  rect(40, 220, 210, 180, 5);
  // 네모 구멍 뒤에 칙칙한 노란색 판
  fill(245, 222, 98);
  noStroke();
  rect(80, 220, 170, 150, 5);

  // 빨간색 배경 살짝, 글씨 그림, 구슬 3개
  fill(232, 79, 32);
  noStroke();
  quad(12, 140, 20, 145, 20, 270, 12, 265);
  rect(40, 220, 10, 180, 5);
  circle(145, 242.5, 45);
  circle(145, 287.5, 45);
  circle(145, 332.5, 45);
  circle(145, 377.5, 45);
  // 초록 구슬
  fill(39, 163, 85);
  circle(75, 242.5, 45);
  circle(75, 287.5, 45);
  circle(75, 332.5, 45);
  circle(75, 377.5, 45);
  // 파란 구슬
  fill(60, 165, 222);
  circle(215, 242.5, 45);
  circle(215, 287.5, 45);
  circle(215, 332.5, 45);
  circle(215, 377.5, 45);

  // 원형 배경
  // circle(415, 180, 130, 130);

  // 강아지
  // 귀
  fill(230, 163, 9);
  stroke(201, 143, 10);
  strokeWeight(3);
  push();
  translate(405, 180);
  rotate(radians(160));
  ellipse(0, 0, 15, 30);
  pop();
  line(402, 177, 404, 180);
  push();
  translate(440, 180);
  rotate(radians(30));
  ellipse(0, 0, 15, 30);
  pop();
  line(444, 177, 442, 180);
  // 다리
  fill(255);
  noStroke();
  ellipse(416, 280, 12, 40);
  ellipse(430, 280, 12, 40);
  // 발
  push();
  translate(414, 300);
  rotate(radians(15));
  ellipse(0, 0, 12, 15);
  pop();
  push();
  translate(431, 300);
  rotate(radians(345));
  ellipse(0, 0, 12, 15);
  pop();
  stroke(201, 143, 10);
  strokeWeight(1);
  line(412, 300, 410, 306);
  line(417, 301, 415, 307);
  line(428, 301, 430, 307);
  line(433, 300, 435, 306);
  // 몸통
  fill(230, 163, 9);
  noStroke();
  ellipse(423, 220, 55, 90);
  ellipse(423, 240, 60, 90);
  fill(255);
  triangle(423, 190, 415, 210, 431, 210);
  ellipse(423, 235, 30, 60);
  ellipse(423, 255, 50, 60);
  stroke(255);
  strokeWeight(5);
  line(423, 178, 423, 240);
  // 눈
  fill(0);
  noStroke();
  ellipse(413, 198, 7, 4);
  ellipse(433, 198, 7, 4);
  circle(423, 210, 7);
  stroke(0);
  strokeWeight(2);
  line(423, 211, 423, 219);
  noFill();
  arc(418, 216, 10, 10, radians(10), radians(170));
  arc(428, 216, 10, 10, radians(10), radians(170));
}
