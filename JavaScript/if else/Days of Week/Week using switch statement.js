function get_day(){
    let day = document.getElementById("day-number").value;
    switch (true) {
        case day == 0:
            document.getElementById("print").innerHTML = "Friday";
            break;
        case day == 1:
            document.getElementById("print").innerHTML = "Saturday";
            break;
    
        case day == 2:
            document.getElementById("print").innerHTML = "Sunday";
            break;
    
        case day == 3:
            document.getElementById("print").innerHTML = "Monday";
            break;
    
        case day == 4:
            document.getElementById("print").innerHTML = "Tuesday";
            break;
    
        case day == 5:
            document.getElementById("print").innerHTML = "Wednesday";
            break;
    
        case day == 6:
            document.getElementById("print").innerHTML = "Thursday";
            break;

        default:
            document.getElementById("print").innerHTML = "Pkease Enter a Valid Day Number";
            break;
    }
};