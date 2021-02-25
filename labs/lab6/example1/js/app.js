var colorList = ["#ff1111", "#11ff11", "#1111ff"];



function setup(){
    createCanvas(400,300);
    fill("#111111");
}

function draw(){
    circle(200,150,100);
}

function changeColor(color){
    fill(color);
}

mouseClicked = function(){
    var distance = dist(mouseX, mouseY, 200, 150);
    if (distance < 100){
    changeColor(colorList[int(random(3))]);
    }
}


