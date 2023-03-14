// this is with "if else" statment

/* let a = 9;
let b = 7;
let c = 6;
if (a > b && a > c){
    document.write("A is bigger number")
} else if (b > c){
    document.write("B is bigger number")
} else {
    document.write("C is bigger number")
} */


// this is with "switch" operator

let a = 0;
let b = 7;
let c = 9;
switch (true) {
    case (a > b && a > c): document.write("A is bigger number")
        
        break;
    case (b > c): document.write("B is bigger number")
        
        break;

    default: document.write("C is bigger number")
        break;
}
