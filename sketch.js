const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var stand,box1,box2,box3,box4;
var box5,box12,box13,box14,box15,box16;
var box17,box18,box19,box20,box21,box22;
var box24,box25,slingshot,stand2;
var polygon,polygonimg,stand1;

function preload(){
	polygonimg=loadImage("polygon.png");
}

function setup() {
	createCanvas(1000,600);

	engine = Engine.create();
	world = engine.world;
	
  //Create the Bodies Here.
stand1=new Stand(390,300,250,10);
stand2=new Stand (700,200,200,10);

//level 1
box1=new Box(400,275,30,40);
box2=new Box(370,275,30,40);
box3=new Box(340,275,30,40);
box4=new Box(310,275,30,40);
box5=new Box(430,275,30,40);
box6=new Box(460,275,30,40);
box7=new Box(480,275,30,40);

box8=new Box(330,235,30,40);
box9=new Box(360,235,30,40);
box10=new Box(390,235,30,40);
box11=new Box(420,235,30,40);
box12=new Box(450,235,30,40);

box13=new Box(360,195,30,40);
box14=new Box(390,195,30,40);
box15=new Box(420,195,30,40);

box16=new Box(390,155,30,40);


box17=new Box(640,175,30,40);
box18=new Box(670,175,30,40);
box19=new Box(700,175,30,40);
box20=new Box(730,175,30,40);
box21=new Box(760,175,30,40);

box22=new Box(670,95,30,40);
box23=new Box(700,95,30,40);
box24=new Box(730,95,30,40);

box25=new Box(700,55,30,40);
box26=new Box(730,55,30,40);







ground=new Ground(100,337,2000,20);

polygon = Bodies.circle(50,200,20);
World.add(world,polygon);

slingshot= new Slingshot(polygon,{x:100,y:450});

Engine.run(engine);

  
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  stand1.display();
  stand2.display();
  
  fill("turquoise")
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  //box26.display();
  
  



  slingshot.display();
  ground.display();

fill("gold");
  imageMode(CENTER)
  image(polygonimg ,polygon.position.x,polygon.position.y,40,40);

}
function mouseDragged(){
	Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}