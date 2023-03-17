// we will make a table of 1 to 100 using nested loop
for(a = 1; a <= 100; a = a + 10) {
    for(b = a; b < a+10; b++) {
        document.write(b + " ")
    }
    document.write('<br>')
};
