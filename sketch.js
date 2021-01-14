
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];

function preload()
{

}

function setup() {
	createCanvas(600, 650);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(0, 650, 1200, 10);

  stand1 = new Division(0, 680, 10, 200);
  stand2 = new Division(80, 680, 10, 200);
  stand3 = new Division(170, 680, 10, 200);
  stand4 = new Division(250, 680, 10, 200);
  stand5 = new Division(330, 680, 10, 200);
  stand6 = new Division(410, 680, 10, 200);
  stand7 = new Division(475, 680, 10, 200);
  stand8 = new Division(540, 680, 10, 200);

  for (var j = 75; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plink(j,75,10));
  }

  for (var j = 50; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plink(j,175,10));
  }

   for (var j = 75; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plink(j,275,10));
  }

   for (var j = 50; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plink(j,375,10));
     
  }


 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();

   stand1.display();
   stand2.display();
   stand3.display();
   stand4.display();
   stand5.display();
   stand6.display();
   stand7.display();
   stand8.display();

   for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  
  if(frameCount%60===0){
   particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
   
 }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }

   


if(frameCount%60===0){
  particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  
}

for (var j = 0; j < particles.length; j++) {
 
   particles[j].display();
 }



}



