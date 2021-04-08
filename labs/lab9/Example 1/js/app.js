let dvSquare = document.querySelector("#square");
dvSquare.style.height = "100px";
dvSquare.style.width = "100px";
let dvHeight = 100;
let dvWidth = 100;


function dvGrow(){
    dvHeight = dvHeight * 1.1;
    dvWidth = dvWidth * 1.1;
    
    dvSquare.style.height = dvHeight + "px";
    dvSquare.style.width = dvWidth + "px";
}
//dvSqaure.style.width