let dvOutput = document.querySelector("#dvOutput");

let objects = [
    {color: "#FF0000", height: 100, width: 300},
    {color: "#FFFF00", height: 200, width: 200},
    {color: "#ff0000", height: 300, width: 100}
]

for (var i = 0; i < objects.length; i++){
    let newDiv = document.createElement("div");
    newDiv.style.background = objects[i].color;
    newDiv.style.height = objects[i].height + "px";
    newDiv.style.width = objects[i].width + "px";
    dvOutput.appendChild(newDiv);

}