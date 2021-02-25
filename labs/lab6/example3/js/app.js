
function setup(){
    createCanvas(800, 600);
    background("#11114f");


    //draws the moon
    fill(255);
    stroke(0); 
    circle(700, 100, 50);

    //moon craters
    fill(225);
    circle(725, 90, 10);
    circle(700, 125, 10);

    //random number of clouds up to 15
    drawClouds(int(random(15)));
}

function draw(){
    //draws the ground continually
    //prevents user from drawing stars over it since that doesn't make sense
    stroke("#004215");
    fill("#004215");
    arc(400, 600, 900, 300, 0, 180);
}


mouseClicked = function(){

    //draws stars on mouse click
    fill(255);
    stroke(255);
    //star center
    circle(mouseX, mouseY, 2);

    //star points
    triangle(mouseX - 3, mouseY, mouseX + 3, mouseY, mouseX, mouseY + 10);
    triangle(mouseX, mouseY - 3, mouseX, mouseY + 3, mouseX + 10, mouseY);
    triangle(mouseX - 3, mouseY, mouseX + 3, mouseY, mouseX, mouseY - 10);
    triangle(mouseX, mouseY - 3, mouseX, mouseY + 3, mouseX - 10, mouseY);
}

function drawClouds(cloudCount){
    stroke(255);
    fill(255);
    //anchor points used for each cloud's general position
    var anchorPointX = 0;
    var anchorPointY = 0;

    //100 - 250
    if(cloudCount > 0){
    for(var i = 0; i < cloudCount; i++){
        //re-generates anchor points for random positions
        anchorPointX = int(random(750));
        anchorPointY = int(random(150)) + 100;
        
        //uses the anchor points to draw multiple ellipses to make a cloud shape
        ellipse(anchorPointX + 10, anchorPointY + 10, 50, 30);
        ellipse(anchorPointX, anchorPointY, 50, 50);
        ellipse(anchorPointX - 10, anchorPointY + 15, 50, 30);
    }
    }

}