const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score=0
function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  
  slingshot = new SlingShot(polygon.body,{x:.200,y:50})
  Polygon = new polygon(50,50,20,20)
  block8 = new Base(330,235,30,40)
  block9 = new Base(360,235,30,40)
  block10 = new Base(390,235,30,40)
  block11 = new Base(420,235,30,40)
  block12 = new Base(450,235,30,40)
  block13 = new Base(360,195,30,40)
  block14 = new Base(390,195,30,40)
  block15 = new Base(420,195,30,40)
  block16 = new Base(390,155,30,40)

}

function draw() {
  background(255,255,255);

  text("SCORE" + score,750,40)

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  slingshot.display();
  Polygon.display();
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();

  drawSprites();
}






