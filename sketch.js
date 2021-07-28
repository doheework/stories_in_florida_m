let img;
let img2;
let controller;
let back;
let backhand;
let stick;
let stickhand;
let dice;
let sliderR;
let sliderG;
let sliderB;
let x, y;
let w = -0.3;
let h = -0.3;


let light;
let street;
let panther;
let ghost;
let wave;
let island;

function preload(){
  img = loadImage("3delement.png");
  img2 = loadImage("hand.png");
  controller = loadImage("controller.png");
  back = loadImage("backcover.png");
  backhand = loadImage("backhand.png");
  stick = loadImage("element_modified.png");
  stickhand = loadImage("hands.png");
  light = loadImage("light.gif");
  street = loadImage("street.png");
  panther = loadImage("panther.png");
  ghost = loadImage("ghost.png");
  wave = loadImage("lowwave.png");
  island = loadImage("island.png");
}

function setup() {

  createCanvas(windowWidth, windowHeight, WEBGL);

  sliderR = createSlider(0, 255, 159);
  sliderG = createSlider(0, 255, 55);
  sliderB = createSlider(0, 255, 76);
  sliderR.hide();
  sliderG.hide();
  sliderB.hide();

  button = createImg('pngegg.png');
  button.position(435, 390);
  button.size(70,70);
  button.mousePressed(randomcolour);

  x = -1050;
  y = -500;

}


function randomcolour(){
  var val = random(0,255);
  var ran = random(0,255);
  var dom = random(0,255);
  sliderR.value(val);
  sliderB.value(ran);
  sliderG.value(dom);
}

function draw() {
  background(200);
  fill(255);
  rect(-windowWidth/2,-windowHeight/2,windowWidth,windowHeight);
  
  let colourR = sliderR.value();
  let colourG = sliderG.value();
  let colourB = sliderB.value();

  translate(0,0,400);
  fill(colourR, colourG, colourB);
  noStroke();
  rotateX(frameCount * 0.1);
  rotateZ(frameCount * 0.01);
  box(63.895, 104.455, 13);
  pop();

  translate(2,-0.2,-1);
  fill(230);
  box(62, 105, 7);
  
  translate(-36,-52, 7.52);
  tint(217,199,182,300);
  image(img,0,0,63.895, 104.455);

  translate(2,0,-13.2);
  image(back,0,0,63.895, 104.455);

  tint(colourR, colourG, colourB, 210);
  image(backhand,0,0,63.895, 104.455);

  translate(0,0,13.3);
  image(img2,0,0,63.895, 104.455);
 
}
