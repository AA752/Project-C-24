
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	ball = new paper(130, 370, 20);
	//Create the Bodies Here.
	block1 = new dustbin(320,315,30,60);
	block2 = new dustbin(480,360,340,30);
	block3 = new dustbin(640,315,30,60);  
	ground = new Ground(400, 700, 340, 40);



}


function draw() {
  rectMode(CENTER);
  background(0);


  ball.display();
  block1.display();
  block2.display();
  block3.display();
  ground.display();

  keyPressed();

  createEdgeSprites();
  
  drawSprites();

 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body,ball.body.position,{x:1.3,y:-12});
		Engine.run(engine);
	}
}