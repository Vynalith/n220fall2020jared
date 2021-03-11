var paddle = {
    xPos: 400,
    yPos: 579,
    height: 20,
    width: 100,
    update: function(){
        this.xPos -= 50;
        rect(this.xPos, this.yPos, this.width, this.height);
    }
}

var ball = {
    xPos: 400,
    yPos: 500,
    radius: 10,
    xMod: 1,
    yMod: -1,
    update: function(){
        circle(this.xPos, this.yPos, this.radius);
        this.xPos += 5 * this.xMod;
        this.yPos += 5 * this.yMod;
    },
    collideWalls: function(){
        if(this.xPos > 800){
            this.xPos = 800;
            this.xMod *= -1;
        }    
        if(this.xPos < 0){
            this.xPos = 0;
            this.xMod *= -1;
        }
        if(this.yPos > 600){
            this.yPos = 600;
            this.yMod *= -1;
        }
        if(this.yPos < 0){
            this.yPos = 0;
            this.yMod *= -1;
        }
    },
    collidePaddle: function(paddleX, paddleY, paddleH, paddleW){
        //regular collision check
        if(this.xPos >= paddleX && this.xPos <= paddleX + paddleW){
            if(this.yPos >= paddleY && this.yPos <= paddleY + paddleH){
                
                //first checks what side of the paddle the ball hit so it
                //can change or keep the ball's x direction
                //if it hit on the left half, the ball changes to move left
                //if it hit on the right, the ball changes to move right
                if(this.xPos > paddleX + (paddleW / 2)){
                    //here's the fun part
                    //variable speeds!
                    //if the ball is hit on the right side and hit any part that is
                    //within 5 pixels of the center, the horizontal speed is halved
                    //so it's more vertical than horizontal
                    if(this.xPos < (paddleX + (paddleW / 2) + 5)){
                        this.xMod = .5;
                    }
                    //if the ball is hit on the furthest 15 pixels on the right,
                    //the speed is doubled, but only on that small bit of the paddle
                    if(this.xPos > (paddleX + paddleW) - 15){
                    this.xMod = 2;
                    }
                    else if(this.xMod > paddleX + paddleW){
                        this.xMod = 1;
                    }
                }
                //similar thing as above, but to the left instead
                //the game is a lot more fun with variable speeds and angles
                else if(this.xPos > (paddleX + (paddleW / 2) - 5)){
                    this.xMod = -.5;
                }
                else if(this.xPos < paddleX + 15) {
                    this.xMod = -2;
                }
                else if(this.xPos < paddleX + (paddleW / 2)){
                    this.xMod = -1
                }
                this.yMod = -1;
            }
        }
    },
    collideBlocks: function(x,y,w,h){
        
        //use if loop to go through the block list in the draw function,
        //then call this using the info for each block's parameters

        //if collide with top, this.ymod = 1
        if(this.xPos >= x && this.xPos <= x + w){
            if(this.yPos >= y && this.yPos <= y + h){
                if(this.xPos == x + w){
                    this.xMod = 1;   
                }
                if(this.xPos == x){
                    this.xMod = -1;
                }
                if(this.yPos == y + h){
                    this.yMod = 1;
                }
                if(this.yPos == y){
                    this.yMod = -1;
                }
                return true;
            }
        }
        //if collide with bottom, this.ymod = -1

        //if collide with left, this.xmod = -1

        //if collide with right, this.ymod = 1
    }

}

var blockList = [
    //top red blocks
    {xPos: 20, yPos: 20, width: 100, height: 20, color: [163, 7, 33]},
    {xPos: 125, yPos: 20, width: 100, height: 20, color: [163, 7, 33]},
    {xPos: 230, yPos: 20, width: 100, height: 20, color: [163, 7, 33]},
    {xPos: 335, yPos: 20, width: 100, height: 20, color: [163, 7, 33]},
    {xPos: 440, yPos: 20, width: 100, height: 20, color: [163, 7, 33]},
    {xPos: 545, yPos: 20, width: 100, height: 20, color: [163, 7, 33]},
    {xPos: 650, yPos: 20, width: 100, height: 20, color: [163, 7, 33]},
    //second row orange
    {xPos: 30, yPos: 50, width: 100, height: 20, color: [214, 134, 13]},
    {xPos: 135, yPos: 50, width: 100, height: 20, color: [214, 134, 13]},
    {xPos: 240, yPos: 50, width: 100, height: 20, color: [214, 134, 13]},
    {xPos: 345, yPos: 50, width: 100, height: 20, color: [214, 134, 13]},
    {xPos: 450, yPos: 50, width: 100, height: 20, color: [214, 134, 13]},
    {xPos: 555, yPos: 50, width: 100, height: 20, color: [214, 134, 13]},
    {xPos: 660, yPos: 50, width: 100, height: 20, color: [214, 134, 13]},
    //third row yellow
    {xPos: 40, yPos: 80, width: 100, height: 20, color: [232, 235, 89]},
    {xPos: 145, yPos: 80, width: 100, height: 20, color: [232, 235, 89]},
    {xPos: 250, yPos: 80, width: 100, height: 20, color: [232, 235, 89]},
    {xPos: 355, yPos: 80, width: 100, height: 20, color: [232, 235, 89]},
    {xPos: 460, yPos: 80, width: 100, height: 20, color: [232, 235, 89]},
    {xPos: 565, yPos: 80, width: 100, height: 20, color: [232, 235, 89]},
    {xPos: 670, yPos: 80, width: 100, height: 20, color: [232, 235, 89]},
    //fourth row green
    {xPos: 20, yPos: 110, width: 100, height: 20, color: [63, 245, 56]},
    {xPos: 125, yPos: 110, width: 100, height: 20, color: [63, 245, 56]},
    {xPos: 230, yPos: 110, width: 100, height: 20, color: [63, 245, 56]},
    {xPos: 335, yPos: 110, width: 100, height: 20, color: [63, 245, 56]},
    {xPos: 440, yPos: 110, width: 100, height: 20, color: [63, 245, 56]},
    {xPos: 545, yPos: 110, width: 100, height: 20, color: [63, 245, 56]},
    {xPos: 650, yPos: 110, width: 100, height: 20, color: [63, 245, 56]},
    //fifth row blue
    {xPos: 30, yPos: 140, width: 100, height: 20, color: [0, 124, 247]},
    {xPos: 135, yPos: 140, width: 100, height: 20, color: [0, 124, 247]},
    {xPos: 240, yPos: 140, width: 100, height: 20, color: [0, 124, 247]},
    {xPos: 345, yPos: 140, width: 100, height: 20, color: [0, 124, 247]},
    {xPos: 450, yPos: 140, width: 100, height: 20, color: [0, 124, 247]},
    {xPos: 555, yPos: 140, width: 100, height: 20, color: [0, 124, 247]},
    {xPos: 660, yPos: 140, width: 100, height: 20, color: [0, 124, 247]},
    //sixth row indigo I think
    {xPos: 40, yPos: 170, width: 100, height: 20, color: [112, 41, 255]},
    {xPos: 145, yPos: 170, width: 100, height: 20, color: [112, 41, 255]},
    {xPos: 250, yPos: 170, width: 100, height: 20, color: [112, 41, 255]},
    {xPos: 355, yPos: 170, width: 100, height: 20, color: [112, 41, 255]},
    {xPos: 460, yPos: 170, width: 100, height: 20, color: [112, 41, 255]},
    {xPos: 565, yPos: 170, width: 100, height: 20, color: [112, 41, 255]},
    {xPos: 670, yPos: 170, width: 100, height: 20, color: [112, 41, 255]},
    //seventh row violet
    {xPos: 20, yPos: 200, width: 100, height: 20, color: [127, 0, 181]},
    {xPos: 125, yPos: 200, width: 100, height: 20, color: [127, 0, 181]},
    {xPos: 230, yPos: 200, width: 100, height: 20, color: [127, 0, 181]},
    {xPos: 335, yPos: 200, width: 100, height: 20, color: [127, 0, 181]},
    {xPos: 440, yPos: 200, width: 100, height: 20, color: [127, 0, 181]},
    {xPos: 545, yPos: 200, width: 100, height: 20, color: [127, 0, 181]},
    {xPos: 650, yPos: 200, width: 100, height: 20, color: [127, 0, 181]},
]



//to make the breakable rectangles, maybe have an array of objects
//draws each one on every frame
//the draw function calls a collision check on each frame
//if the ball is touching any rectangle, delete that entry from the array


//how to check for collision on side vs on top?
//seperate calls?
//if the y of the circle is greater than the y of the paddle or
//less than the y of the blocks + their height (since the
//anchor point of a rectangle is the top left corner)?

//the same idea could be used for checking collision with each side
//if circle x > rect x then it probably hit the right side
//if it EQUALS rect x, then it hit the left. It has to equal it though,
//since the left side is the x anchor

function setup(){
    createCanvas(800,600);

}

function draw(){
    background(0);
    fill(255);

    //Paddle drawing and controls
    paddle.xPos = mouseX;
    paddle.update();
    
    //ball collision followed by movement
    ball.collideWalls();
    ball.collidePaddle(paddle.xPos, paddle.yPos, paddle.height, paddle.width);
    //checks for collision with any of the blocks
    for (var i = 0; i < blockList.length; i++){
        if(ball.collideBlocks(blockList[i].xPos, blockList[i].yPos, blockList[i].width, blockList[i].height)){
            blockList.splice(i, 1);
        }
    }
    ball.update();
    // console.log(ball.yMod);
    // console.log(ball.collidePaddle(paddle.xPos, paddle.yPos, paddle.height, paddle.width));

    //draws the blocks
    for(var i = 0; i < blockList.length; i++){
        fill(blockList[i].color);
        rect(blockList[i].xPos, blockList[i].yPos, blockList[i].width, blockList[i].height);
    }


    


}