const name = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

console.log("name:-",name.value);

function validateForm(){
    const emailpattern = "/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/";
    const passwordPattern = "/^[a-zA-Z0-9!@#$%^&*]{6,16}$/";
    let flag = 1;
    if(name.value == ''){
        document.getElementById('nameError').innerHTML = "Please enter your name";
        flag = 0;
    }else{
        document.getElementById('nameError').innerHTML = "";
        flag = 1;
    } 

    if(email.value == ''){
        document.getElementById('emailError').innerHTML = "Please enter your email";
        flag = 0;
    }else if(emailpattern.test(email.value)){
        document.getElementById('emailError').innerHTML = "Enter a valid email ";
        flag = 0;
    }else{
        document.getElementById('emailError').innerHTML = "";
        flag = 1;
    }

    if(password.value == ''){
        document.getElementById('passwordError').innerHTML = "Please enter your password";
        flag = 0;
    }else if(passwordPattern.test(password.value)){
        document.getElementById('passwordError').innerHTML = "Please enter a valid password";
        flag = 0;
    }else{
        document.getElementById('passwordError').innerHTML = "";
        flag = 1;
    }

    if(confirmPassword.value == ''){
        document.getElementById('cofirmPasswordError').innerHTML = "Please re-enter your password";
        flag = 0;
    }else if(confirmPassword.value != password.value){
        document.getElementById('cofirmPasswordError').innerHTML = "Not Matching with password";
        flag = 0;
    }else{
        document.getElementById('cofirmPasswordError').innerHTML = "";
        flag = 1;
    }
    if(flag){
        return true;
    }else{
        return false;
    }

    
}