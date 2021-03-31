function form_validation(){
    var user_name = document.getElementById("username");
    var password = document.getElementById("password");
    if(user_name.value == ""){
        alert('User name should not be empty..');
    }
    else if(password.value == ""){
        alert("Password should not be empty...");
    }else{
        alert("Ready to submit for server...");
    }
}