function setup() {
  createCanvas(400,400);

  a =  createSprite(300, 200, 50, 50);
  a.shapeColor = ("red");
  a.debug = true;
  b = createSprite(200,200,40,40);
  b.shapeColor = ("red");
  b.debug = true;

}

function draw() {
  background("yellow");  
  a.x = World.mouseX;
  a.y = World.mouseY;

  if(a.x-b.x<a.width/2+b.width/2 && 
    b.x-a.x<a.width/2+b.width/2 && 
    a.y-b.y<a.height/2+b.height/2 && 
    b.y-a.y<a.height/2+b.height/2 ){
    a.shapeColor = "green";
    b.shapeColor = "green";
  }
  else{
    a.shapeColor = "red";
    b.shapeColor = "red";
  }

  drawSprites();
}