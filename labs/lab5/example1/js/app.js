var colorList = ["#ff1111", "#11ff11", "#1111ff"];
var colorPicker = 0;
function setup(){
    createCanvas(600, 600);

    draw();
}

function draw(){
    for(var i = 0; i < 600; i+= 50){
        if(colorPicker > 2){
            colorPicker = 0;
        }
        fill(colorList[colorPicker]);
        console.log(colorList[colorPicker]);
        rect(0, i, 600, 50);
        colorPicker+=1;
    }
}