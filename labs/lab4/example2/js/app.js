function setup(){
    createCanvas(800, 600);
    fill(255, 0, 0);

    draw();
}

function draw(){
    for(var yAxis = 0; yAxis < 5; yAxis++){
        for(var xAxis = 0; xAxis < yAxis; xAxis++){
            //the * 5 is for even spacing and the +50*axis is so they aren't smashed up against each other
            rect(xAxis * 5 + 50 * xAxis, yAxis * 5 + 50 * yAxis, 50, 50);
        }
    }

}

