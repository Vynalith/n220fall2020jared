let xPos = 0;
let yPos = 0;
let xMod = 1;
let yMod = 1;


function setup(){
    createCanvas(800,600);
    draw();
}


function draw(){
    xPos = xPos + (xMod * 5);
    yPos = yPos + (yMod * 3);

    if(xPos > 800){
        xMod = -1;
    }
    if(xPos < 0){
        xMod = 1;
    }
    if(yPos > 600){
        yMod = -1;
    }
    if(yPos < 0){
        yMod = 1;
    }

    circle(xPos, yPos, 10);

}