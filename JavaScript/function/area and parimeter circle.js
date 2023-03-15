// to find area
function areaCircle(b) {
    let area = 3.14 * (b**2);
    document.write("area of circle is = " + area + "<br>");
}

areaCircle(10);
// to find perimeter

function periCircle(r) {
    let peri = 2*3.14*r;
    document.write("Perimeter of circle is " + peri+ "<br>");
}

periCircle(10);

// perimeter and area in single function

function periArea(r) {
    let area = 3.14 * (r**2); 
    let peri = 2*3.14*r;
    document.write("Perimeter of circle is " + peri + " and area is " + area + "<br>");
};

periArea(10);