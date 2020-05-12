const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg;
var boxrow1 = [];
var boxrow2 = [];
var boxrow3 = [];
var boxrow4 = [];
var boxrow5 = [];
var boxrow6 = [];
var xa = 900;
var xb = 955;
var xa1 = 927.5;
var xb1 = 982.5;
var xa2 = 955;
var xb2 = 1010;
var xa3 = 982.5;
var xb3 = 1037.5;
var xa4 = 515;
var xb4 = 570;
var xa5 = 542.5;
var xb5 = 597.5;
function preload(){
bg = loadImage("bg.jpg");
}

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  ball = new Ball(200,200,50,50);
 for (var i = 0; i < 5; i++){
  for(var x = xa; x <= xb; x=x+55){
    fill(random(0,255),random(0,255),random(0,255));
     console.log(xa);
     boxrow1[i] = new Box(xa,415,50,50);
     boxrow1[i].debug = true;
 }
xa = xa+55;
xb = xb+55;
  }
  for (var i = 0; i < 4; i++){
    for(var x = xa1; x <= xb1; x=x+55){
      fill(random(0,254),random(0,254),random(0,254));
       console.log(xa1);
       boxrow2[i] = new Box(xa1,225,50,50);
   }
  xa1 = xa1+55;
  xb1 = xb1+55;
    }
    for (var i = 0; i < 3; i++){
      for(var x = xa2; x <= xb2; x=x+55){
        fill(random(0,254),random(0,254),random(0,254));
         console.log(xa2);
         boxrow3[i] = new Box(xa2,125,50,50);
     }
    xa2 = xa2+55;
    xb2 = xb2+55;
      }
      for (var i = 0; i < 2; i++){
        for(var x = xa3; x <= xb3; x=x+55){
          fill(random(0,254),random(0,254),random(0,254));
           console.log(xa3);
           boxrow4[i] = new Box(xa3,25,50,50);
       }
      xa3 = xa3+55;
      xb3 = xb3+55;
        }
        for (var i = 0; i < 4; i++){
          for(var x = xa4; x <= xb4; x=x+55){
            fill(random(0,254),random(0,254),random(0,254));
             console.log(xa4);
             boxrow5[i] = new Box(xa4,25,50,50);
         }
         xa4 = xa4+55;
         xb4 = xb4+55;
        }
         for (var i = 0; i < 3; i++){
          for(var x = xa5; x <= xb5; x=x+55){
            fill(random(0,254),random(0,254),random(0,254));
             console.log(xa5);
             boxrow6[i] = new Box(xa5,-100,50,50);
         }
        xa5 = xa5+55;
        xb5 = xb5+55;
          }
  ground = new Ground(600,450,1200,20);
  ground1 = new Ground(600,225,300,20);
  ground2 = new Ground(215,370,100,10);
  slingshot = new Catapult(ball.body,{x:200, y:200});
}


function draw() {
  background(0);  
  Engine.update(engine);
  ball.display();
  slingshot.display();
  ground1.display();
  ground.display();
  ground2.display();
  for (var i = 0; i < 5; i++) {
    boxrow1[i].display();
  }
  for (var i = 0; i < 4; i++) {
    boxrow2[i].display();
  }
  for (var i = 0; i < 3; i++) {
    boxrow3[i].display();
  }
  for (var i = 0; i < 2; i++) {
    boxrow4[i].display();
  }
  for (var i = 0; i < 4; i++) {
    boxrow5[i].display();
  }
  for (var i = 0; i < 3; i++) {
    boxrow6[i].display();
  }
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
