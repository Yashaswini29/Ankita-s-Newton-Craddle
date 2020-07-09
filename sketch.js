
var ground,bob3,bob2,bob1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;
var ground;

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(200,50);
	bob1 = new Bob(100,300);
  bob2 = new Bob(140,300); 
  bob3 = new Bob(180,300);
  bob4 = new Bob(220,300);
  bob5 = new Bob(260,300);
  
  rope1 = new Rope(bob1.body,ground.body,-80,0);
  rope2 = new Rope(bob2.body,ground.body,-40,0);
	rope3 = new Rope(bob3.body,ground.body,0,0);
  rope4 = new Rope(bob4.body,ground.body,40,0);
  rope5 = new Rope(bob5.body,ground.body,80,0);


	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  ground.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x : -40,y : -30})
	}
}
