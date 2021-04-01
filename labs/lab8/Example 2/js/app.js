let txtUsername = document.getElementById("txtUsername");
let txtPassword = document.getElementById("txtPassword");
let dvOutput = document.querySelector("#dvOutput");

function loginCheck(){
    let username = txtUsername.value;
    let password = txtPassword.value;

    if(username == "Username" && password == "Password"){
        dvOutput.innerHTML = "Success";
    }
    else{
        dvOutput.innerHTML = "Wrong information";
    }
}