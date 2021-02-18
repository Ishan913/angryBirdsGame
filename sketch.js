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
let playImg;

function preload() {
  birdImg = loadImage('images/bird.png');
  columnImg = loadImage('images/column.png');
  rowImg = loadImage('images/beam.png');
  groundImg = loadImage('images/ground.png');
  backgroundImg = loadImage('images/back2.png');
  slingImg1 = loadImage('images/sling1.png');
  slingImg2 = loadImage('images/sling2.png');
  backImgHome = loadImage('images/homebg.jpg')
}

function setup() {
  mode=0;
  engine = Engine.create();
  world = engine.world;

  const canvas = createCanvas(windowWidth, windowHeight);
  ground = new Ground(width / 2, height - 75, width, 50);
  // for (let i=0;i<3;i++){
  //   boxes[i] = new ColumnBox(450, 300-i*75, 50, 75);
  // }
  level1();

  bird = new Bird(250, 575, 25);

  slingshot = new Slingshot(250, 575, bird.body);

  const canvasMouse = Mouse.create(canvas.elt);
  canvasMouse.pixelRatio = pixelDensity();
  const options = {
    mouse: canvasMouse
  }
  mConstraint = MouseConstraint.create(engine, options);

  World.add(world, mConstraint);
  
}

function keyPressed() {
  if (mode == 1) {
    if (key = ' ') {
      World.remove(world, bird.body);
      bird = new Bird(150, 300, 25);
      slingshot.attach(bird.body);
    }
  }
}

function mouseReleased() {
  if (mode == 1) {
    setTimeout(() => {
      slingshot.fly();
    }, 80)
  }
}


function level1() {
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

function draw() {

  if (mode == 0) {
    draw0();
  }

  if (mode == 1) {
    draw1();
  }
}

function mousePressed(){
  if (mode==0){
    // if (mouseX<500 && mouseY<500){
    //   mode=1;
    // }
  }
}


function draw0() {
  background(backImgHome);

}

function draw1() {
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
}