const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bg;

function preload(){
	bg=loadImage("bg.png");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(400,500,900,10);

	ball=new Ball(250,100);
	sling=new Slingshot(ball.body,{x:250,y:100});

	box1=new Box(700,100);
    box2=new Box(700,100);
    box3=new Box(700,100);
    box4=new Box(700,100);
    box5=new Box(700,100);
    box6=new Box(700,100);
    box7=new Box(700,100);

    box8=new Box(750,100);
    box9=new Box(750,100);
    box10=new Box(750,100);
    box11=new Box(750,100);
    box12=new Box(750,100);
    box13=new Box(750,100);
    box14=new Box(750,100);

    box15=new Box(650,100);
    box16=new Box(650,100);
    box17=new Box(650,100);
    box18=new Box(650,100);
    box19=new Box(650,100);
    box20=new Box(650,100);
	box21=new Box(650,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);

	ground.display();

	ball.display();
	//sling.display();

  	box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    //second
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    //third
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
}
function mouseDragged(){
	Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	sling.fly();
}