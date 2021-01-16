var thunder1,thunder2,thunder3,thunder4;
var engine,world;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies

function preload(){
thunder1 = loadImage("1.png");
thunder2 = loadImage("2.png");
thunder3 = loadImage("3.png");  
thunder4 = loadImage("4.png");
}

function setup(){
   createCanvas(400,700);
engine = Engine.create();
world = engine.world
    
}

function draw(){
 background(0);
 Engine.update(engine)   
}   

