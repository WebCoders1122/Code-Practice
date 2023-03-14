// this exercise will find area of triangle with sides of 5, 6, 7
let sideA = 5;
let sideB = 6;
let sideC = 7;
let s = (sideA+sideB+sideC)/2;
let a = s*(s-sideA)*(s-sideB)*(s-sideC);
let area = a**0.5;
document.write(area);