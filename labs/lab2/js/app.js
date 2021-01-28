function setup(){
    createCanvas(800,600);
    drawBody();
    drawCoal();
    drawArms();
    drawHat();
    drawNose();
}

function drawBody(){
    fill(255);
    //Bottom
    circle(400,500,100);

    //Middle
    circle(400,350,75);

    //Top
    circle(400,240,55);


//do the graph of a number squared to get the position of the mouth
}

function drawCoal(){
    //Draw the eyes
    fill(0);
    circle(420, 225, 6);
    circle(380, 225, 6);

    //base set of coords for the mouth
    var x = 360;
    var y = 270;
    var temp = 4;

    //draws the mouth
    //x starts on the far right, then moves left as count goes down.
    //
    //y is really freaking complicated to me
    //Basically, I used the idea of y = x^2 creating an ellipse
    //I used temp to offset count starting at 7, so the lowest possible number is -3
    //and the highest is 3
    //Multiplying everything by -2 makes the result have a much wider variation so they're better spaced
    for(var count = 7; count > 0; count--){
        circle(x + (count * 10), y + (((temp - count) * (temp - count)) * -2), 6);
    }
}

function drawArms(){

    stroke(165, 80, 42);
    strokeWeight(7);
    line(470, 320, 540, 300);
    line(328, 320, 258, 300);
    //x = 350 - 37.5
    //y = 400
}

function drawHat(){
    //y = 240
    //x = 400
    stroke(0);
    strokeWeight(1);
    rect(340, 185, 120, 20);

    //tall part
    rect(360, 105, 80, 80);

}

function drawNose(){
    //x = 400
    //y = 240
    fill(255, 165, 0);
    stroke(255, 165, 0);
    triangle(400, 240, 400, 230, 420, 235);
}