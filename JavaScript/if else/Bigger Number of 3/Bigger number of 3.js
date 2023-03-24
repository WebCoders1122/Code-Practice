// using if else statement

function get_input(){
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;

if (a > b && b > c) {
    document.getElementById("result").innerHTML = a + " is Bigger Number";
} else if (b > c){
    document.getElementById("result").innerHTML = b + " is Bigger Number";
} else {
    document.getElementById("result").innerHTML = c + " is Bigger Number";
}
}
