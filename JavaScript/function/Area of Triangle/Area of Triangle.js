function tri_area(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;
    let x = Number(a) + Number(b) + Number(c);
    let s = x/2;

    function cal_area() { 
        let d = s * (s - a) * (s - b) * (s - c);
    let area = d**0.5;
       return area;
    };
    if (cal_area() === 0) {
        document.getElementById('result').innerHTML = "Triangle is not Valid";
    } else {
        document.getElementById('result').innerHTML = "Area of Triangle = " + cal_area();
    }

}
