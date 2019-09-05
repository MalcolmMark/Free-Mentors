let email  = document.getElementById("email");
let password  = document.getElementById("psd");
let login_btn = document.getElementById("lgbtn")

// Check if username and pasword do match the needed ones
function check_data(){ 
    if(email.value == "user@auto.com"){
        return location = "./home.html"
    } if (email.value = "admin@auto.com") {
        return location = "./admin.html";
    } else {
        alert("User not available")
        
    }
}

// Check if it is admin or user logining and redirect to a specific page
login_btn.addEventListener("click", ()=>{
    if(email.value.length > 0 && password.value.length > 0){
        check_data();
    } else {
        alert("Error: Some field is missing");
    }
});