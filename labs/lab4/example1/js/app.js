function setup(){
    createCanvas(800, 600);
    for(var iterant = 0; iterant < 25; iterant++){
        fill(0);
        if(iterant % 3 == 0 && iterant % 5 == 0){
            fill(0, 0, 255);
            circle(iterant * 10 + 300, 200, 5);
        }
        else if(iterant % 3 == 0){
            fill(255, 0, 255);
            circle(iterant * 10 + 300, 200, 5);
        }
        else if(iterant % 5 == 0){
            fill(0, 255, 0);
            circle(iterant * 10 + 300, 200, 5);
        }
        else{
            fill(0);
            //The 300 offsets it so the far left one isn't 
            circle(iterant * 10 + 300, 200, 5);
        }
        

        console.log(iterant);
    }
}