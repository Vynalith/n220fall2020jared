let userContent = document.getElementById("userContent");
let dvOutput = document.querySelector("#dvOutput");

function search(){
    let userText = userContent.value;
    let storyText = userText.split(" ");
    let badCount = 0;

    for (var i = 0; i < storyText.length; i++){
        if (storyText[i] == "water" || storyText[i] == "clear" || storyText[i] == "tires"){
            badCount++;
        } 
    }

    if(badCount == 0){
        dvOutput.innerHTML = "No bad words were found";
    }
    else if (badCount == 1){
        dvOutput.innerHTML = "There was one bad word found";   
    }
    else {
        dvOutput.innerHTML = "There were " + badCount + " bad words found";
    }
    
    userContent.value = "";
}


