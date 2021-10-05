
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 function keyPressed(){
	 if (keyCode === 32){
		 Matter.Body.setPosition(StoneObj.body,{x:235,y:420})
	 launcherObject.attach(stoneObj.body);
		}
 }
 function detecollision(Estone,Lmango){
	 mangoBodyPosition=1mango.body.position
	 stoneBodyPosition=1stone.body.positon
var distance=dist(stoneBodyPoistion.x,stoneBody.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=1mango.r+1stone.r)
{
	Matter.Body.setStatic(1mabgo.body,false);
}	}
 detectcolliosion(stoneObj,mango1)
  detectcolliosion(stoneObj,mango2)
  detectcolliosion(stoneObj,mango3)
  detectcolliosion(stoneObj,mango4)
  detectcolliosion(stoneObj,mango5)
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  drawSprites();
 
}



