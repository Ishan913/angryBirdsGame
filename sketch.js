let { Engine, World, Bodies, MouseConstraint, Mouse, Constraint } = Matter;
let ground;
const boxes=[];
let bird;
let world, engine;
let mConstraint;
let slingshot;
let birdImg;
let columnImg;
let rowImg;
let groundImg;
let backgroundImg;

function preload(){
  birdImg=loadImage('images/bird.png');
  columnImg = loadImage('images/column.png');
  rowImg  = loadImage('images/beam.png');
  groundImg = loadImage('images/ground.png');
  backgroundImg = loadImage('images/back2.png');
}

function setup() {
  const canvas = createCanvas(1500, 750);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height - 75, width, 50);
  // for (let i=0;i<3;i++){
  //   boxes[i] = new ColumnBox(450, 300-i*75, 50, 75);
  // }
  boxes[0]=new ColumnBox(1000,500,19,82);
  boxes[1]=new ColumnBox(1083,500,19,82);
  boxes[2]=new RowBox(1041,450,83,21);
  boxes[3]=new ColumnBox(1166,500,19,82);
  boxes[4]=new ColumnBox(1249,500,19,82);
  boxes[5]=new RowBox(1124,450,83,21);
  boxes[6]=new RowBox(1207,450,83,21);
  boxes[7]=new ColumnBox(1041,350,19,82);
  boxes[8]=new ColumnBox(1124,350,19,82);
  boxes[9]=new RowBox(1083,300,83,21);
  boxes[10]=new ColumnBox(1207,350,19,82);
  boxes[11]=new RowBox(1166,300,83,21);
  
  bird = new Bird(250, 575, 25);

  slingshot = new Slingshot(250,575,bird.body);

  const canvasMouse= Mouse.create(canvas.elt);
  canvasMouse.pixelRatio=pixelDensity();
  const options = {
    mouse: canvasMouse
  }
  mConstraint = MouseConstraint.create(engine, options);
  mConstraint = MouseConstraint.create(engine, options);

  World.add(world,mConstraint);

}

function keyPressed(){
  if (key=' '){
    World.remove(world,bird.body);
    bird = new Bird(150, 300, 25);
    slingshot.attach(bird.body);
  }
}

function mouseReleased(){
  setTimeout(() => {
    slingshot.fly();
  },80)
}

function draw() {
  background(backgroundImg);
  Matter.Engine.update(engine);
  ground.show();
  for(let i=0;i<boxes.length;i++){
    boxes[i].show()
  }
  bird.show();
  slingshot.show();
}
