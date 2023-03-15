// we will find area of triangle with given 3 sides
let a = 6; //sideA
let b = 8; //sideB
let c = 4; //sideC
let s = (a + b + c)/2 //parameter
function area() {
    let calculation = (s*(s-a)*(s-b)*(s-c))**0.5;
    document.write("Area of triange = " + calculation);
}

area();
