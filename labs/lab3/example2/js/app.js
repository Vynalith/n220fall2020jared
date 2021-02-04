let xPos = 0;



function setup(){
    createCanvas(800,600);
    draw();
}


function draw(){
    xPos+=5;

    if(xPos > 800){
        xPos = 0;
    }
    circle(xPos, 300, 10);

}