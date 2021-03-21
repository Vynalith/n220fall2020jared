//-------------------------PLANS AND NOTES------------------------
//draw
//get y pos of mouse
//create array of circle objects and use mouseypos for the y and x as the center of 400
//use for loop to draw each circle in the draw function
//update the array in draw function
//use a for loop to iterate through the array
//check for mousex and set circlesize to (|400 - mouseX|)
//absolute value so the number is always positive for the size


//color
//need a fill
//stay in grayscale
//color brightness = |circlex - xpos| / 4
//use the /4 to stay within 255 range


//animate
//check for if mouse is held down
//if true, make y value of circles decrease continually until it reaches 0
//have something like if(circley > 0) {
//    circley -= 5;
//}
//to decrease the y but keep it above 0


//reset
//add an else to the animate part that sets the circle y back to mousey
//keep that animate if thing in the draw function and put it below the draw circle thing
//so if the mouse is let go, the circles are drawn back at the normal place

//honestly I'm not sure when the circles are supposed to change
//like do they change only when reset?
//are they supposed to change constantly until they start dropping, where they suddenly become static?
//do they always change even when dropping?
//I'm going off of the assumption they are constantly changing

//-------------------ACTUAL CODE----------------------------
var mouseYPos = 300;
//default value of 300;
let circleList = [
    {xPos: 60, yPos: 0, size: 10, color: 255},
    {xPos: 140, yPos: 0, size: 10, color: 255},
    {xPos: 220, yPos: 0, size: 10, color: 255},
    {xPos: 300, yPos: 0, size: 10, color: 255},
    {xPos: 380, yPos: 0, size: 10, color: 255},
    {xPos: 460, yPos: 0, size: 10, color: 255},
    {xPos: 540, yPos: 0, size: 10, color: 255},
    {xPos: 620, yPos: 0, size: 10, color: 255},
    {xPos: 700, yPos: 0, size: 10, color: 255},
    {xPos: 780, yPos: 0, size: 10, color: 255},
]


function setup(){
    createCanvas(800,600);

}


//resets the y value and sets the circle's y to the mouse's y
//only runs after the mouse has been pressed and then released
//it's the reset
mouseClicked = function(){
    mouseYPos = mouseY;
    for (var x = 0; x < circleList.length; x++){
        circleList[x].size = 100 / (Math.abs(circleList[x].xPos - mouseX) / 10);
        circleList[x].yPos = mouseYPos;
        // circleList[x].color = 100 / Math.abs(circleList[x].xPos - mouseX) / 4;
        // fill(int(circleList[x].color));
    }
    
}


function draw(){
    //resets the background so there isn't the trailing effect
    background(255);

    for(var i = 0; i < circleList.length; i++){
        //need the "100 /" part to make the circles grow instead of shrink
        circleList[i].size = 100 / (Math.abs(circleList[i].xPos - mouseX) / 10);
        //I don't really understand the math behind this one but I used the same
        //logic as what I did with the size since higher numbers are brighter
        //I don't really understand the math behind why using anything less than
        //1000 has no noticeable change but whatever works
    circleList[i].color = 5000 / (Math.abs(circleList[i].xPos - mouseX) / 4);
    fill(int(circleList[i].color));
    circle(circleList[i].xPos, circleList[i].yPos, circleList[i].size, circleList[i].color);
    }
    
    if(mouseIsPressed == true){
        for(var i = 0; i < circleList.length; i++){
        //makes sure the circles don't go off the edge of the screen
        if(circleList[i].yPos < 590){
            circleList[i].yPos += 5;
        }
        }
    }
    


}