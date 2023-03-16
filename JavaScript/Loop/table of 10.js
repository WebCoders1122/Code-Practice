// Write table of 10 using dowhile loop
let a = 10;
let b = 1;
do {
    document.write(10 + " x " + b + " = " + a + '<br>');
    a = a + 10;
    b++;
} while (a <= 100);


// // Write table of 10 using for loop
for (a = 10, b = 1; a <= 100; a = a + 10, b++) {
    document.write('10 x ' + b + ' = ' + a + '<br>');
}
