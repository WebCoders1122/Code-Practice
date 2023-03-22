function get_day(){
    let day = document.getElementById("day-number").value;
    if (day == 0) {
        document.getElementById("print").innerHTML = "Friday";
    } else if (day == 1){
        document.getElementById("print").innerHTML = "Saturday";
    } else if (day == 2){
        document.getElementById("print").innerHTML = "Sunday";
    } else if (day == 3){
        document.getElementById("print").innerHTML = "Monday";
    } else if (day == 4){
        document.getElementById("print").innerHTML = "Tuesday";
    } else if (day == 5){
        document.getElementById("print").innerHTML = "Wednesday";
    } else if (day == 6){
        document.getElementById("print").innerHTML = "Thursday";
    } else {
        document.getElementById("print").innerHTML = "Please Enter Valid Day Number";
    }
};
