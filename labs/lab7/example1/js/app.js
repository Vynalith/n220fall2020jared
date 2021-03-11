var drawCircle = {
    xPos: 10,
    yPos: 10,
    radius: 10,
    color: [100, 255, 100],
    update: function () {
        fill(this.color);
        this.xPos += 5;
        circle(this.xPos, this.yPos, this.radius);
    }
}

function setup(){
    createCanvas(800,600);

}

function draw(){
    drawCircle.update();
}