//blockSpeed is used for the blocks to gradually speed up as the game goes on. The more blocks destroyed, the faster the remaining blocks get. Used in the draw function under block information updating.
var blockSpeed = .25;
//Direction is used to see which direction the blocks go in. If it's positive, they move to the right. If it's negative, they move to the left. Used in the draw function under block information updating.
var direction = 1;
//moveDown is a boolean used when the blocks reach the edge of the screen. When set to true, the blocks move down a bit, then moveDown is reset back to false. Used in the draw function under block information updating
let moveDown = false;
//Keeps track of the highest x position of the blocks during each loop of the draw function. Used in the draw function under block information updating
var highestX = 0;
//Keeps track of the lowest x position of the blocks during each loop of the draw function. Used in the draw function under block information updating
var lowestX = 0;
//Used at the very end of the draw function to determine what the status of the game is. If the player loses, gameStatus is set to gameover and if the player wins, gameStatus is set to victory.
var gameStatus = '';
//bulletList is used to store up to two active bullets and their information at once. When a bullet reaches the top of the screen, it's removed from the array.
bulletList = [];


var player = {
    xPos: 400,
    yPos: 600,
    radius: 30,
    update: function(){
        //circle but with a stick so it's like the turret thing from the actual game
        circle(this.xPos, this.yPos + 10, this.radius);
        stroke(255,255,255);
        rect(this.xPos - 5, this.yPos - 35, 10, 40);
    }
}

var blockList = [
    //top row 
    {xPos: 120, yPos: 20, width: 40, height: 40, color: [255, 255, 255]},
    {xPos: 170, yPos: 20, width: 40, height: 40, color: [255, 255, 255]},
    {xPos: 220, yPos: 20, width: 40, height: 40, color: [255, 255, 255]},
    {xPos: 270, yPos: 20, width: 40, height: 40, color: [255, 255, 255]},
    {xPos: 320, yPos: 20, width: 40, height: 40, color: [255, 255, 255]},
    {xPos: 370, yPos: 20, width: 40, height: 40, color: [255, 255, 255]},
    {xPos: 420, yPos: 20, width: 40, height: 40, color: [255, 255, 255]},
    {xPos: 470, yPos: 20, width: 40, height: 40, color: [255, 255, 255]},
    {xPos: 520, yPos: 20, width: 40, height: 40, color: [255, 255, 255]},
    {xPos: 570, yPos: 20, width: 40, height: 40, color: [255, 255, 255]},
    {xPos: 620, yPos: 20, width: 40, height: 40, color: [255, 255, 255]},
    //second row 
    {xPos: 120, yPos: 70, width: 40, height: 40, color: [255, 255, 255]},
    {xPos: 170, yPos: 70, width: 40, height: 40, color: [255, 255, 255]},
    {xPos: 220, yPos: 70, width: 40, height: 40, color: [255, 255, 255]},
    {xPos: 270, yPos: 70, width: 40, height: 40, color: [255, 255, 255]},
    {xPos: 320, yPos: 70, width: 40, height: 40, color: [255, 255, 255]},
    {xPos: 370, yPos: 70, width: 40, height: 40, color: [255, 255, 255]},
    {xPos: 420, yPos: 70, width: 40, height: 40, color: [255, 255, 255]},
    {xPos: 470, yPos: 70, width: 40, height: 40, color: [255, 255, 255]},
    {xPos: 520, yPos: 70, width: 40, height: 40, color: [255, 255, 255]},
    {xPos: 570, yPos: 70, width: 40, height: 40, color: [255, 255, 255]},
    {xPos: 620, yPos: 70, width: 40, height: 40, color: [255, 255, 255]},

    //third row 
    {xPos: 120, yPos: 120, width: 40, height: 40, color: [255, 255, 255]},
    {xPos: 170, yPos: 120, width: 40, height: 40, color: [255, 255, 255]},
    {xPos: 220, yPos: 120, width: 40, height: 40, color: [255, 255, 255]},
    {xPos: 270, yPos: 120, width: 40, height: 40, color: [255, 255, 255]},
    {xPos: 320, yPos: 120, width: 40, height: 40, color: [255, 255, 255]},
    {xPos: 370, yPos: 120, width: 40, height: 40, color: [255, 255, 255]},
    {xPos: 420, yPos: 120, width: 40, height: 40, color: [255, 255, 255]},
    {xPos: 470, yPos: 120, width: 40, height: 40, color: [255, 255, 255]},
    {xPos: 520, yPos: 120, width: 40, height: 40, color: [255, 255, 255]},
    {xPos: 570, yPos: 120, width: 40, height: 40, color: [255, 255, 255]},
    {xPos: 620, yPos: 120, width: 40, height: 40, color: [255, 255, 255]},
   

    //fourth row 
    {xPos: 120, yPos: 170, width: 40, height: 40, color: [255, 255, 255]},
    {xPos: 170, yPos: 170, width: 40, height: 40, color: [255, 255, 255]},
    {xPos: 220, yPos: 170, width: 40, height: 40, color: [255, 255, 255]},
    {xPos: 270, yPos: 170, width: 40, height: 40, color: [255, 255, 255]},
    {xPos: 320, yPos: 170, width: 40, height: 40, color: [255, 255, 255]},
    {xPos: 370, yPos: 170, width: 40, height: 40, color: [255, 255, 255]},
    {xPos: 420, yPos: 170, width: 40, height: 40, color: [255, 255, 255]},
    {xPos: 470, yPos: 170, width: 40, height: 40, color: [255, 255, 255]},
    {xPos: 520, yPos: 170, width: 40, height: 40, color: [255, 255, 255]},
    {xPos: 570, yPos: 170, width: 40, height: 40, color: [255, 255, 255]},
    {xPos: 620, yPos: 170, width: 40, height: 40, color: [255, 255, 255]},

    
    //fifth row 
    {xPos: 120, yPos: 220, width: 40, height: 40, color: [255, 255, 255]},
    {xPos: 170, yPos: 220, width: 40, height: 40, color: [255, 255, 255]},
    {xPos: 220, yPos: 220, width: 40, height: 40, color: [255, 255, 255]},
    {xPos: 270, yPos: 220, width: 40, height: 40, color: [255, 255, 255]},
    {xPos: 320, yPos: 220, width: 40, height: 40, color: [255, 255, 255]},
    {xPos: 370, yPos: 220, width: 40, height: 40, color: [255, 255, 255]},
    {xPos: 420, yPos: 220, width: 40, height: 40, color: [255, 255, 255]},
    {xPos: 470, yPos: 220, width: 40, height: 40, color: [255, 255, 255]},
    {xPos: 520, yPos: 220, width: 40, height: 40, color: [255, 255, 255]},
    {xPos: 570, yPos: 220, width: 40, height: 40, color: [255, 255, 255]},
    {xPos: 620, yPos: 220, width: 40, height: 40, color: [255, 255, 255]},


]

mouseClicked = function(){
    //if there are less than 2 bullets currently on screen and the game isn't over, creates a new bullet object and adds it to the end of the bulletList array
    //bullets have built-in update and collision functions
    if (bulletList.length < 2 && gameStatus!="gameover"){
        bulletList.push({
            xPos: player.xPos - 5, 
            yPos: 570,
            width: 10,
            height: 10,
            update: function(){
                this.yPos-= 10;
                rect(this.xPos, this.yPos, this.width, this.height);
            },
            collision: function(x, y, w, h){
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
            }
    });
    }
}

function setup(){
    createCanvas(800,600);

}

function draw(){
    //background keeps coloring in the..background
    //prevents things like smears
    background(0);
    //sets the color of everything but the background, since everything is going to be white anyway
    fill(255);
    
    //goes down the bulletList array, where the stored coordinates of any on-screen bullets are
    //moves each bullet by a set amount determined in bulletList.update
    for (var b = 0; b < bulletList.length; b++){
        bulletList[b].update();
        //if a bullet goes off of the top of the screen, uses bulletList.shift to remove the top element in the array, since the top element will always be the lowest y value and the highest position in this case
        if(bulletList[b].yPos < 0){
            bulletList.shift();
        }
        // for (var a = 0; a < blockList.length - 1; a++){
        //     console.log("looping through blockList" + a);
        //     console.log(blockList[a]);
        //     // if (bulletList[b].collision(blockList[a].xPos,blockList[a].yPos)){
        //     //     console.log("hit");
        //     //     //splice at the index of b to remove the bullet
        //     //     //splice at the index of a to remove the block
        //     // }
        // }
    }

    //determines the two farthest blocks' x positions on both sides
    //if a higher x value is found that what is currently set to highestX, changes to set highestX to the new highest value found. Does the same with lowestX and low values.
    for(var a = 0; a < blockList.length; a++){
        if (blockList[a].xPos >= highestX){
            highestX = blockList[a].xPos;
        }
        if(blockList[a].xPos <= lowestX){
            lowestX = blockList[a].xPos;
        }
    }


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //                                              Block information updating                                    //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //if either of the farthest blocks' x positions go past the walls, changes direction and sets the
    //moveDown boolean to true
    for(var a = 0; a < blockList.length; a++){
        //if the highest x position is over 760, sets the direction to move left towards negative X
        //760 is the specific number because the squares have a width of 40, and the x position of a square is the top right corner
        if(highestX > 760){
            direction = -1;
            moveDown = true;
        }
        //does the same as above, but checks the left side with the lowest x position and sets the direction to the right towards positive x
        if(lowestX < 0){
            direction = 1;
            moveDown = true;
        }
        //handles horizontal movement
        blockList[a].xPos+= (direction * blockSpeed);

        //if moveDown is set to true, moves each block down by a small amount
        if(moveDown){
            blockList[a].yPos += 20;
        }
        //when the blocks reach the bottom of the screen, checks to see if they collide with the player. If they do, set the game status to game over. If they don't the game continues.
        if(blockList[a].yPos >= 560){
            if(blockList[a].xPos >= player.xPos && blockList[a].xPos - blockSpeed <= player.xPos || blockList[a].xPos + 40 <= player.xPos && blockList[a].xPos + 40 + blockSpeed >= player.xPos){
                //sets the blockList array to an empty array to clear the screen
                blockList = [];
                gameStatus = "gameover";
            }
        }
        //if no collision is detected, the player can keep playing. player.update is what draws the player piece
        else{
            player.xPos = mouseX;
            player.update();
        } 
    }
    //resets all used variables to make each check accurate
    highestX = 0;
    lowestX = 800;
    moveDown = false;
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////                                       End of block information updating                                      //
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 
    for(var a = 0; a < blockList.length; a++){
        for(var b = 0; b < bulletList.length; b++){
            if(bulletList[b].collision(blockList[a].xPos, blockList[a].yPos, blockList[a].width, blockList[a].height)){
                bulletList.splice(b,1);
                blockList.splice(a,1);
                blockSpeed+=.25;
                if(blockList.length == 0){
                    gameStatus = "victory";
                }
            }
        }
    }





    //draws the blocks
    for(var i = 0; i < blockList.length; i++){
        fill(blockList[i].color);
        rect(blockList[i].xPos, blockList[i].yPos, blockList[i].width, blockList[i].height);
    }
    
    //if gameStatus is set to gameover, then white text saying Game over! is displayed in the relative center of the screen.
    if (gameStatus == "gameover"){
        text("Game over!", 375, 300);
    }
    else if(gameStatus == "victory"){
        text("You win!", 375, 300);
    }

}