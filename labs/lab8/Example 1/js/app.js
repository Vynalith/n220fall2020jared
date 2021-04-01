let userName = document.getElementById("txtName");

function getName(){
    let name = userName.value;
    console.log(btnGreet(name));
   
}


function btnGreet(name){
    return("Hello " + name);
}