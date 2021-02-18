

let frameCount = 0;
let waterDropY = [0];


function setup(){
    createCanvas(600, 600);
    draw();
}

function draw(){

    background(255);
    frameCount++;
    console.log(frameCount);

    if (frameCount % 10 == 0){
        waterDropY.push(0);
    }

    //how to draw: 
    for(var i = 0; i < waterDropY.length; i++){
        circle(300, waterDropY[i], 5);
    }

    for(var x = 0; x < waterDropY.length; x++){
        waterDropY[x]+= 5;
    }

    if(waterDropY[0] > 605){
        waterDropY.shift();
    }

    console.log("waterDropY[0] = " + waterDropY[0]);

}