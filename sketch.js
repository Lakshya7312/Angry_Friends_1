const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backg;
var ground, platform;
var bird;
var sling;
var box1, box2, box3, box4, box5;
var log1, log2;
var friend1, friend2;

var score = 0;

var gameState = "onSling";

var bg = "images/space.jpg";


function preload(){
  getBackImage();
}

function setup() {
  var canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  backg = loadImage("images/space.jpg");

  ground = new Ground(600, 591, 1199, 17);
  platform = new Ground(178, 436, 350, 290);

  box1 = new Box(700, 500, 80, 80);
  box2 = new Box(1000, 500, 80, 80);

  friend1 = new Friend1(500, 570);
  
  log1 = new Log(861, 380, 400, 90, PI/2);

  box3 = new Box(750, 300, 80, 80);
  box4 = new Box(980, 300, 80, 80);

  friend2 = new Friend2(700, 400);

  log2 = new Log(840, 220, 400, 90, PI/2);

  box5 = new Box(827, 180, 80, 80);

  bird = new Bird(400, 50);

  sling = new SlingShot(bird.body, {x:200, y:100});

}

function draw() {
  if(backg){
  background(backg); 
  } 
  Engine.update(engine);

  fill("white");
  textStyle(BOLD);
  textSize(25);
  text("Score: " + score, 900, 50);
  friend1.score();
  friend2.score();
  
  fill(48,24,18);
  ground.display();
  fill(223,50,7)
  platform.display();

  box1.display();
  box2.display();
  
  friend1.display();

  log1.display();

  box3.display();
  box4.display();

  friend2.display();

  log2.display();

  box5.display();

  bird.display();

  sling.display();
  
}

function mouseDragged() {
  if(bird.body.position.x < 410){
  Matter.Body.setPosition(bird.body, {x:mouseX , y:mouseY});
  }
}

function mouseReleased() {
  sling.fly();
  gameState = "launched";
}

function keyPressed() {
  if(keyCode === 32 && bird.body.speed < 3){
    bird.trajectory = [];
    Matter.Body.setPosition(bird.body, {x:190, y:90});
    sling.attach(bird.body);
  }
}

async function getBackImage(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11, 13);
  console.log(responseJSON);
  if(hour >= 06 && hour <= 23){
     bg = "images/space.jpg";
  }
  else{
    bg = "images/space2.jpg";
  }

  backg = loadImage(bg);
}