function setup(){
    createCanvas(600, 600);

    draw();
}

function draw(){
    for(var circleSize = 300; circleSize > 0; circleSize-= 5){
        circle(300, 300, circleSize);
    }
}