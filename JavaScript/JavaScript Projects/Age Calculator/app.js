// required veriables from html
let birthDate = document.getElementById('date');
let presentDate = new Date();
let target = document.getElementById('resultage');
// presentDate = presentDate.toDateString();
console.log(presentDate.getFullYear());




const getDate = () => {
    //get date from user
    let x = new Date(birthDate.value);
    console.log(x);

    // calcualte age
    let years, months, days;
    years = presentDate.getFullYear() - x.getFullYear();
    months = presentDate.getMonth() - x.getMonth();
    days = presentDate.getDate() - x.getDate();
    if (days < 0) {
        days = 30 + days;
        months--;
    }
    
    if (months < 0) {
        months = 12 + months;
        years--;
    }
   
    // show age
    if (years < 0) {
        target.innerText = `Please Enter a Valid Date of Birth`
        return
    }
    target.innerText = `Your Age is ${years} years, ${months} months and ${days} days.`;
    
    
}




