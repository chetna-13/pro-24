
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3;
var ground;
var object;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	box1 = new Dustbin(690,585,10,100);
	box2 = new Dustbin(605,585,10,100);
	box3 = new Dustbin(650,630,80,10);
	
	ground = createSprite(400,650,800,10);
	 ground.shapeColor="yellow";
	 
	object = new Paper(150,630,50,50)
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  box1.display();
    box2.display();
	box3.display();
	ground.display();
	object.display();

	keyPressed();
	
  drawSprites();
 
}
function keyPressed(){
if (keyCode===UP_ARROW){
Matter.Body.applyForce(object.body,object.body.position,{x:85,y:-85});
		}
	}