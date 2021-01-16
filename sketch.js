
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload(){}

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(400,530,100);
	bob2 = new Bob(500,530,100);
	bob3 = new Bob(600,530,100);
	bob4 = new Bob(700,530,100);
	bob5 = new Bob(800,530,100);

  roof = new Roof(600,30,500,20);
  
  var bobDiameter = 200;

  string1 = new Rope(bob1.body,roof.body,-bobDiameter,0);
  string2 = new Rope(bob2.body,roof.body,-bobDiameter/2,0);
  string3 = new Rope(bob3.body,roof.body,bobDiameter*0.02,0);
  string4 = new Rope(bob4.body,roof.body,bobDiameter*0.5,0);
  string5 = new Rope(bob5.body,roof.body,bobDiameter*1,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();

  //keyPressed();
 
}

function keyPressed (){
  if (keyCode === UP_ARROW){
      Body.applyForce(bob1.body,bob1.body.position,{x:-500,y:-500});
  }
}



