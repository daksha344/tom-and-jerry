var cat ;









function preload(){
 catImage=loadImage("cat1.png");
}









function setup(){
    createCanvas(600, 200);
    
    cat=createSprite(200,100,50,50);
    cat.addImage("catImage");
}








function draw(){
background ("black")

    drawSprites();
}
