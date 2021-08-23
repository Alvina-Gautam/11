const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var boyObject;
var snow = [];

function preload() {
  backgroundImg = loadImage("winter.jpg");
}

function setup() {
  createCanvas(1200,700);
  engine = Engine.create();
  world = engine.world;
  //World.add(world,boyObject);
  ground = new Ground(width/2,height,width,1);
  
  boyObject = new Boy (600, 580, 50, 120);
  boyObject.scale = "0.1";
}

function draw() {
  background(0,0,0);
  background(backgroundImg);
  Engine.update(engine);

  //boyObject.scale =0.1;
  boyObject.display();
  

  if(frameCount%10===0){
    //var snow=createSprite(Math.round(random(20,370)),0,10,10);
    snow.push(new Snow(random(width/2+10,width/2+10),5,5));
    }
  for(var k = 0; k<snow.length; k++){
    snow[k].display();
  }

  drawSprites();
}