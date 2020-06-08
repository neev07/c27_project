var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var roof1; 
var bob1,bob2,bob3;
var r1,r2,r2;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	roof1=new roof(150,20,700,20);
	bob1=new bob(100,220,30);
	bob2=new bob(150,220,30);
	bob3=new bob(190,220,30);

r1=new Rope(bob1.body,roof1.body,30,0);
r2=new Rope(bob2.body,roof1.body,30,10);
r3=new Rope(bob3.body,roof1.body,30,0);
	

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);



  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(180);

  roof1.display();

  bob1.display();
  bob2.display();
  bob3.display();
 r1.display();
 r2.display();
 r3.display();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-80,y:85});

	}
}



