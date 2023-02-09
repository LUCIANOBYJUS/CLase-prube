var humanso;
function setup() {
  createCanvas(400,400);
  humanso=createSprite(200,200,50,50)
}

function draw() 
{
  background(30);
  if(keyIsDown(RIGHT_ARROW)){
    humanso.position.x= humanso.position.x+5

  }
drawSprites();
}




