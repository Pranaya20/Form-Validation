const name = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

console.log("name:-",name.value);

function validateForm(){
    const emailpattern = "/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/";
    const passwordPattern = "/^[a-zA-Z0-9!@#$%^&*]{6,16}$/";
    if(name.value == ''){
        document.getElementById('nameError').innerHTML = "Please enter your name";
    }else{
        document.getElementById('nameError').innerHTML = "";
    } 

    if(email.value == ''){
        document.getElementById('emailError').innerHTML = "Please enter your email";
    }else if(emailpattern.test(email.value)){
        // document.getElementById('emailError').innerHTML = "Enter a valid email ";
        conaole.log("Please enter a valid email")
    }else{
        document.getElementById('emailError').innerHTML = "";
    }

    if(password.value == ''){
        document.getElementById('passwordError').innerHTML = "Please enter your password";
    }else if(passwordPattern.test(password.value)){
        document.getElementById('passwordError').innerHTML = "Please enter a valid password";
    }else{
        document.getElementById('passwordError').innerHTML = "";
    }

    if(confirmPassword.value == ''){
        document.getElementById('cofirmPasswordError').innerHTML = "Please re-enter your password";
    }else if(confirmPassword.value != password.value){
        document.getElementById('cofirmPasswordError').innerHTML = "Not Matching with password";
    }else{
        document.getElementById('cofirmPasswordError').innerHTML = "";
    }

    return false;
}