
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100, 500, 15);
	trashcan = new TrashCan(850, 570);
	ground = new Ground(width/2, 600, width, 50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  text("press up arrow key to launch", 450, 200);

  drawSprites();
  paper.display();
  trashcan.display();
  ground.display();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Body.applyForce(paper.body, paper.body.position, {x:40, y:-40});
	}
}


