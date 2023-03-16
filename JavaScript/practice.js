// show odd numbers below 50
document.write('Below are odd numbers between 0 and 50 <br>');
for(let a = 0; a <= 50; a++) {
    if(a % 2 != 0) {
        document.write(a + "<br>");
    }
}