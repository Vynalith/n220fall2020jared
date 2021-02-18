
let mouseXPos = [0,0,0,0,0,0,0,0,0,0];
let mouseYPos = [0,0,0,0,0,0,0,0,0,0];

function setup(){
    createCanvas(600, 600);

    draw();
}

function draw(){
    mouseXPos.push(mouseX);
    mouseYPos.push(mouseY);
    mouseYPos.shift();
    mouseXPos.shift();
    background(255,255,255);

    for(var i = 0; i < mouseXPos.length; i++){
        circle(mouseXPos[i], mouseYPos[i], 10);
    }

}