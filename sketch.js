var man, dropGroup;
var manImage, dropImage;

function preload(){

    manImage = loadImage("walking_1.png");
    dropImage = loadImage("output-onlinepngtools (4).png");
    
}

function setup(){

    createCanvas(400, 400);
    man = createSprite(200, 300, 20, 20);
    man.addImage(manImage);
    man.scale = 0.3;
    man.depth = true; 

    dropGroup = createGroup();
    
}

function draw(){

    background("white");
    
    Drop();

    drawSprites();
    
}  

function Drop()
{

    if(frameCount % 10 === 0)
    {

        var drop = createSprite(200, 200, 20, 20);
        drop.addImage(dropImage);
        drop.scale = 0.1;
        drop.x = random(50, 350);
        drop.y = 20;
        drop.velocityY = 7;

        if(drop.y - man.y < man.width/2 + drop.width/2) 
        {

            drop.velocityY = -3;

        }

        dropGroup.add(drop);     

    }

}

