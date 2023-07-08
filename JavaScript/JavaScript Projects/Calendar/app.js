const month = document.querySelector('.heading');
const days = document.querySelector('.dates');
const nextprev = document.querySelectorAll('.icons');


let months = ["January","February","March","April","May","June","July",
"August","September","October","November","December"];


let date = new Date()


// 01 making month dynamic
month.innerText = `${months[date.getMonth()]} ${date.getFullYear()}`

// 02 making days dynamic
const insertdays = () => {    
    let lastDateofMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    console.log(lastDateofMonth)
    
    for (let i = 0; i < lastDateofMonth+1; i++) {
        let litag = `<li class="date">${i}</li>`
        days.insertAdjacentHTML("beforeend", litag)
    }
}; insertdays()


// 03 making next and previous icons dynamic
nextprev.forEach(element => {
    element.addEventListener('click', (e) => {
        
        if (e.target.id === next) {
            
        }
    })
});