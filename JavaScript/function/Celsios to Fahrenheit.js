let a = prompt("Enter Value in Celcius");

function celFar() {
    var cal = (a * (9/5)) + 32;
    return cal;
}
document.write(a +" Celcius is " + celFar() + " in Fahrenheit.");