//Using "if else" Statement

/* let per = 60;
if (per >= 80 && per <=100) {
    document.write('Your Grade is "Marit".')
} else if (per >= 60 && per < 79) {
    document.write('Your Grade is "1<sup>st</sup> Division".')
} else if (per >= 45 && per < 59) {
    document.write('Your Grade is "2<sup>nd</sup> Division".')
} else if (per >= 33) {
    document.write('Your Grade is "3<sup>rd</sup> Division".')
} else if (per < 33) {
    document.write('Your are Fail.')
} else {
    document.write('Enter Valid Percentage.')
} */

// Using "switch Statement"
let per = 60;
let result;
// here using "ternary operator"

switch (result = 1) {
    case (per >= 80 && per <=100): document.write('Your Grade is "Marit".')
        break;
    case (per >= 60 && per < 79): document.write('Your Grade is "1<sup>st</sup> Division".')
        break;
    case (per >= 45 && per < 59): document.write('Your Grade is "2<sup>nd</sup> Division".')
        break;
    case (per >= 33): document.write('Your Grade is "3<sup>rd</sup> Division".')
        break;
    case (per < 33): document.write('Your are Fail.')
        break;
    default: document.write('Enter Valid Percentage.')
        break;
}


