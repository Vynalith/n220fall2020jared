let xPos = 0;
let yPos = 0;
let xMod = 1;
let yMod = 1;


function setup(){
    createCanvas(800,600);
}


function draw(){
    //makes it so the circle and rectangle don't have the weird after-image thing
    background(255);

    //motion for the circle
    xPos = xPos + (xMod * 5);
    yPos = yPos + (yMod * 3);


    //checks for collision on the 2 side walls
    if(collideWalls(xPos)){

        //needed since the functions can only return true or false
        //>400 means it bounces off the right wall so it sets the xmod to -1
        if(xPos > 400){
            xMod = -1;
        }
        else{
            xMod = 1;
        }
    }

    //same deal as above but for the ceiling and floor
    //>300 bounces off ceiling
    if(collideCeiling(yPos)){
        if(yPos > 300){
            yMod = -1;
        }
        else{
            yMod = 1;
        }
    }

    //rectangle collision
    if(collideRect(xPos, yPos, mouseX, 580, 100, 19)){
        yMod = -1;
    }

    //continually draws the moving circle and a rectangle at the mouse's x and at the bottom of the page
    circle(xPos, yPos, 10);
    rect(mouseX, 580, 100, 19);


}

function collideRect(circleX, circleY, rectX, rectY, rectW, rectH){
    var colliding = false;

    if(circleX > rectX && circleX < rectX + rectW){
        if(circleY > rectY && circleY < rectY + rectH){
             return true;
        }
    }

    return false;

}

function collideWalls(circleX){
    if(circleX > 800 || circleX < 0){
        return true;
    }
    
    return false;
}

function collideCeiling(circleY){
    if (circleY > 600 || circleY < 0){
        return true;
    }

    return false;
}