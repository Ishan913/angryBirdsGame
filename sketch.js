let { Engine, World, Bodies, MouseConstraint, Mouse, Constraint } = Matter;
let ground;
const boxes = [];
let bird;
let world, engine;
let mConstraint;
let slingshot;
let birdImg;
let columnImg;
let rowImg;
let groundImg;
let backgroundImg;
let slingImg1;
let slingImg2;
let mode;
let backImgHome;
let backImgLevel;
let playImg;
let Second;
let l1Img;
let l2Img;
let l3Img;
let backImg;
let birds = [];


function preload() {
  birdImg = loadImage('images/bird.png');
  columnImg = loadImage('images/column.png');
  rowImg = loadImage('images/beam.png');
  groundImg = loadImage('images/ground.png');
  backgroundImg = loadImage('images/back2.png');
  slingImg1 = loadImage('images/sling1.png');
  slingImg2 = loadImage('images/sling2.png');
  backImgHome = loadImage('images/homebg.jpg');
  playImg = loadImage('images/playButton.png')
  backImgLevel = loadImage('images/backLevel.png')
  l1Img = loadImage('images/level1.png');
  l2Img = loadImage('images/level2.png');
  l3Img = loadImage('images/level3.png');
  backImg = loadImage('images/back.png');
}

function setup() {
  mode = 0;
  engine = Engine.create();
  world = engine.world;

  const canvas = createCanvas(windowWidth, windowHeight);
  ground = new Ground(width / 2, height - 75, width, 50);
  // for (let i=0;i<3;i++){
  //   boxes[i] = new ColumnBox(450, 300-i*75, 50, 75);
  // }
  // level1();

  const canvasMouse = Mouse.create(canvas.elt);
  canvasMouse.pixelRatio = pixelDensity();
  const options = {
    mouse: canvasMouse
  }
  mConstraint = MouseConstraint.create(engine, options);

  World.add(world, mConstraint);
  // bird.mouseReleased(birdThrow);

}

function level1() {
  if (bird != undefined) {
    World.remove(world, bird.body);
  }
  bird = new Bird(250, 575, 25);
  for (let i = 0; i < boxes.length; i++) {
    World.remove(world, boxes[i].body);
  }
  // World.remove(world, bird.body);
  slingshot = new Slingshot(250, 575, bird.body);
  boxes[0] = new ColumnBox(1000, 500, 19, 82);
  boxes[1] = new ColumnBox(1083, 500, 19, 82);
  boxes[2] = new RowBox(1041, 450, 83, 21);
  boxes[3] = new ColumnBox(1166, 500, 19, 82);
  boxes[4] = new ColumnBox(1249, 500, 19, 82);
  boxes[5] = new RowBox(1124, 450, 83, 21);
  boxes[6] = new RowBox(1207, 450, 83, 21);
  boxes[7] = new ColumnBox(1041, 350, 19, 82);
  boxes[8] = new ColumnBox(1124, 350, 19, 82);
  boxes[9] = new RowBox(1083, 300, 83, 21);
  boxes[10] = new ColumnBox(1207, 350, 19, 82);
  boxes[11] = new RowBox(1166, 300, 83, 21);
}

function keyPressed() {
  if (mode == 2) {
    if (key = ' ') {
      World.remove(world, bird.body);
      bird = new Bird(250, 575, 25);
      slingshot.attach(bird.body);
    }
  }
}


function mouseReleased() {
  if (mode == 2 && Math.abs((second() - Second)) > 1) {
    setTimeout(() => {
      slingshot.fly();
    }, 80)
  }
}

function mousePressed() {
  if (mode == 0) {
    if (mouseX > 650 && mouseY > 375 && mouseX < 853 && mouseY < 475) {
      Second = second(); //new game debug error
      mode = 1;
    }
  }
  if (mode == 1) {
    if (dist(mouseX, mouseY, 70, 100) < 50) {
      mode = 0;
    }
    if (mouseX > 150 && mouseY > 300 && mouseX < 377 && mouseY < 527 && Math.abs((second() - Second)) > 1) {
      mode = 2;
      level1();
      Second = second(); //new game debug error
    }
    if (mouseX > 650 && mouseY > 300 && mouseX < 877 && mouseY < 527 && Math.abs((second() - Second)) > 1) {
      mode = 2;
      Second = second(); //new game debug error
    }
    if (mouseX > 1150 && mouseY > 300 && mouseX < 1377 && mouseY < 527 && Math.abs((second() - Second)) > 1) {
      mode = 2;
      Second = second(); //new game debug error
    }
  }
  
  if (mode == 2) {
    if (dist(mouseX, mouseY, 70, 100) < 50) {
      mode = 1;
      Second = second(); //new game debug error
    }
  }
}


function draw() {
  if (mode == 0) {
    draw0();
  }

  if (mode == 1) {
    draw1();
  }

  if (mode == 2) {
    draw2();
  }
}


function draw0() {
  background(backImgHome);
  if (random(0, 1) < 0.025) {
    birds.push(new Bird(random(-100, 0), random(height / 5, height * 3 / 5), 35));
    // birds[i]=new Bird(random(0,250),random(0,575),35);
  }
  for (let i = 0; i < birds.length; i++) {
    birds[i].randomMovement();
    birds[i].show();
    if (birds[i].body.position.x > width && birds[i].body.position.y > height) {
      birds.splice(i, 1);
      i--;
    }

  }
  console.log(birds.length)
  image(playImg, 650, 375, 203, 100); //w/h ratio 2.03

}

function draw1() {
  background(backImgLevel);
  image(l1Img, 150, 300);
  image(l2Img, 650, 300);
  image(l3Img, 1150, 300);
  image(backImg, 20, 50, 100, 100)
}

function draw2() {
  background(backgroundImg);
  Matter.Engine.update(engine);
  ground.show();
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].show()
  }
  image(slingImg1, 250, 560, 25, 125);
  // image(slingImg2,250,575,);
  bird.show();
  image(slingImg2, 230, 560, 28.125, 78.125);
  slingshot.show();
  image(backImg, 20, 50, 100, 100)
}