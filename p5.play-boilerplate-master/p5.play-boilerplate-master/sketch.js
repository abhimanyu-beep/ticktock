const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var hr;
var mn;
var sc;


var block1;
var block2;
var block3;







function setup() {
  createCanvas(800,400);
  block1 = new Clock(400, 200, 50, 50);
  block2 = new Clock(200,100,)


  hr = hour();
  mn = minute();
  sc = second();


}

function draw() {
  background(255,255,255);  

  block1.display();


   push();
   rotate(scAngle);
   stroke(255,0,0);
   strokeWeight(7);
   line(0,0,100,0)
   pop();


  drawSprites();
}