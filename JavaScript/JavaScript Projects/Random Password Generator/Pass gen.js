// sets for password
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = "1234567890"
const special = "~!@#$%^&*()_+/"

// all inputs from html to this file
const screenInput = document.getElementById('pass_screen');
const lengthInput = document.getElementById('pass_length');
const upperInput = document.getElementById('upper_case');
const lowerInput = document.getElementById('lower_case');
const numberInput = document.getElementById('number');
const specialInput = document.getElementById('special');

// function to get a rendom number from any sets given for password
function randomNumber(set){
    return set[Math.floor(Math.random()*set.length)]
};

// function to generate complete password
function genPass(password = '') {
    if (upperInput.checked) {
        password += randomNumber(upperCase);
    }
    if (lowerInput.checked) {
        password += randomNumber(lowerCase);
    }
    if (numberInput.checked) {
        password += randomNumber(number);
    }
    if (specialInput.checked) {
        password += randomNumber(special);
    }
    if (password.length < lengthInput.value) {
        return genPass(password);
    }
    screenInput.innerHTML = trimPass(password, lengthInput.value);
    console.log(password)
};

// function tp trim passwrod
function trimPass(a, b) {
    if (a.length> b) {
        let newpass = a.substring(0, b);
        return newpass;
    }else{
        return a;
    }
}
