//let numList = [];
let userContent = document.getElementById("userContent");
let dvOutput = document.querySelector("#dvOutput");

function mathTime(){
    let content = userContent.value;
    let numList = content.split(",");

    let total = 0;
    let average = 0;
    for(var i = 0; i < numList.length; i++){
        total+= Number(numList[i]);
        average+= Number(numList[i]);
    }
    average = average / numList.length;

    let output = "The sum is " + total + " and the average is " + average + ".";
    dvOutput.innerHTML = output;
}