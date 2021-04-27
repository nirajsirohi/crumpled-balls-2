//creating global variables
var bullet;
var speed,weight;
var wall,thickness;
var damage;

function setup() {
  //creating canvas
  createCanvas(1600,400);

  //giving thickness to the wall
  thickness = random(22,83);

  //creating wall sprite
  wall = createSprite(1200,200,50,250);
  wall.shapeColor = color(255,228,196);

  //creating bullet sprite
  bullet = createSprite(10,200,20,7);
  bullet.shapeColor = color(255,223,0);

  //giving weight to the bullet
  weight = random(30,52);

  //giving speed to the bullet
  speed = random(223,321);
  bullet.velocityX = speed; 
}

function draw() {
  //giving background color
  background(0,0,0);

  //calculating damage when bullet collides with the wall
 if(collide(bullet,wall)){
    //stopping the bullet 
    bullet.velocityX = 0;

    //to stop the bullet at the wall
    if(bullet.x>1160){
      bullet.x=1159;
    }

    //calulating damage
    damageCalculation();
  }
  
  //giving text
  textFont("Calibri");
  fill(153,51,255);
  textSize(27);
  text("This is the damage that has happened to the wall :",250,380);

  textFont("Calibri");
  fill(255,102,178);
  textSize(25);
  text("This is a simulator to test the wall strength",400,70);

  textStyle(BOLD);
  fill(0,255,255);
  text("BULLETS AND WALLS",470,25);

  textStyle(ITALIC);
  fill(51,255,153);
  text("Damage is : < = 10 then, Wall is effective against Bullets",30,300);
  text("Damage is : > 10 then, Wall is not effective against Bullets",30,340); 
  textSize(100);
  fill(153,204,255);
  text(".",5,297);
  text(".",5,337);

  //drawing the sprites
  drawSprites();
}

//defining function collide
function collide(object1,object2){
  object1RightEdge = object1.x + object1.width ;
  object2LeftEdge = object2.x - object2.width ;
  if(object1RightEdge >= object2LeftEdge){
    return true;
  }
  else {
    return false;
  }
   
}

//calculating damage
function damageCalculation(){
damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness)
    if(damage>10){
      //changing color of the wall to red
      wall.shapeColor = "red";

      //giving text
      textSize(25);
      fill("red");
      text(Math.round(damage),800,380);
      text("{This wall is not effective,HENCE REJECTED}",850,380);
    }
    else if(damage<=10){
      //changing color of the wall to green
      wall.shapeColor = "green";

      //giving text
      textSize(27);
      fill("green");
      text(Math.round(damage),800,380);
      text("{This wall is effective}",820,380);
    }
  }