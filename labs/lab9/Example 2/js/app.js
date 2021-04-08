for(var i = 0; i < 100; i++){
    console.log(i);
    var div = document.createElement('div');
    div.style.height = "20px";
    div.style.width = "20px"; 
    let color = (Math.floor(Math.random() * 16777215)).toString(16);
    console.log(color);
    div.style.background = "#" + color;
    div.innerHTML = i + 1;
    div.style.margin = "1px";
    document.body.appendChild(div);

}


