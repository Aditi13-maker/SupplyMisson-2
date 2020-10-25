var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var boxEdge1Sprite,boxEdge2Sprite,boxEdge3Sprite
var boxEdge1,boxEdge2,boxEdge3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	boxEdge1Sprite=createSprite(275,620,20,100);
	boxEdge1Sprite.shapeColor="red";

	boxEdge2Sprite=createSprite(380,660,200,20);
	boxEdge2Sprite.shapeColor="red";

	boxEdge3Sprite=createSprite(480,620,20,100);
	boxEdge3Sprite.shapeColor="red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 645, width, 10 , {isStatic:true} );
	World.add(world, ground);

	Edge2=Bodies.rectangle(380,660,200,20,{isStatic:true});


	Edge3=Bodies.rectangle(480,620,20,100,{isStatic:true});
	

	Engine.run(engine);
  
}


function draw() {
	background("black");
	Engine.update(engine);
  rectMode(CENTER);
  	


 
  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  drawSprites();
}

function keyPressed() {
 if (keyCode===DOWN_ARROW) {
	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:false});
	World.add(world, packageBody);
	
 }

}



