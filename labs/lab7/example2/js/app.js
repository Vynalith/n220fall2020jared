var circleList = [
    {xPos: 50, yPos: 50, radius: 10, color: [150, 0, 255]},
    {xPos: 100, yPos: 100, radius: 10, color: [235, 124, 4]},
    {xPos: 150, yPos: 150, radius: 10, color: [152, 42, 100]},
    {xPos: 200, yPos: 200, radius: 10, color: [12, 150, 30]}
]




function setup(){
    createCanvas(800,600);
}

function draw(){
    background(255);
    let randMove = int(Math.random() * 10);
    // console.log(randMove);
 for(var i = 0; i < circleList.length; i++){
    fill(circleList[i].color);
    circle(circleList[i].xPos, circleList[i].yPos, circleList[i].radius);
    
    //Something to make movement random instead of a straight line
    //defines a new random number each frame and sets randMove to it
    //if randMove is even, the circles move at a random speed to the right
    //if randMove is odd, the circles move at a random speed down
    if(randMove % 2 == 0){
        circleList[i].xPos += (int(Math.random() * 10));
    }
    else{
        circleList[i].yPos += (int(Math.random() * 10));
    }
 }
}