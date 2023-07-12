// all veriables
const currentDate = document.querySelector('.heading'),
    daysTag = document.querySelector('.dates'),
    prevNextIcon = document.querySelectorAll(".icons i"),
    months = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];

// get date
let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

// 01 to show month and dates in calendar
const renderCalendar = () => {
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // last date of current month
        liTag = ``,
        firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // first day of current month
        lastDayofMonth = new Date(currYear, currMonth + 1, 0).getDay(), // last day of current month
        lastDateofprevMonth = new Date(currYear, currMonth, 0).getDate();
    // 04 to show date of previous month
    for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="date inactive">${lastDateofprevMonth - i + 1}</li>`
    }
    // 03 to show dates of current month
    for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday = (i === new Date().getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear()) ? 'date active' : 'date';
        liTag += `<li class="${isToday}">${i}</li>`
    }
    // 05 to show dates of next month
    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="date inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
    console.log(lastDateofMonth);
}; renderCalendar();

// 02 to make next previous icons working
prevNextIcon.forEach(
    (icon) => {
        icon.addEventListener(
            'click',
            () => {
                currMonth = (icon.id === 'next') ? currMonth + 1 : currMonth - 1;
                // 06 fixing next and previous year months
                if (currMonth < 0 || currMonth > 11) {
                    date = new Date(currYear, currMonth)
                    currYear = date.getFullYear(),
                    currMonth = date.getMonth();
                } else {
                    date = new Date()
                }
                renderCalendar();
            }
        )
    }
)
