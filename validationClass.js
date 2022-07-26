function isEmptyOrSpaces(str){
    return str ===null || str.match(/^ *$/) !== null;
}

function Validation(){
    let emailregex = /^[a-zA-Z0-9]+@(gmail|yahoo|outlook|hotmail)\.com$/;
    let nameregex = /^[a-zA-Z\s]+$/;
    const email = document.getElementById("signup-email");
    const password = document.getElementById("signup-password");
    const password2 = document.getElementById("signup-confirmPassword");

    if(isEmptyOrSpaces(email.value) || isEmptyOrSpaces(password.value)){
        alert("You cannot have any blank fields.")
        return false;
    }
    if(!emailregex.test(email.value)){
        alert("Enter a valid email address");
        return false;
    }
    if(password.value != password2.value){
        alert("Passwords do not match.");
        return;
    }
    return true;

    module.exports= {
        isEmptyOrSpaces:isEmptyOrSpaces
      }
}