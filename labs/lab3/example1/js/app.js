function setup(){
    createCanvas(400,300);
    draw();
}

function draw(){
    if(mouseX > 200){
        fill(255, 0, 0);
        ellipse(mouseX, mouseY, 10, 10, red);
    }
    else{
        fill(0, 0, 255);
        ellipse(mouseX, mouseY, 10, 10);
    }
}