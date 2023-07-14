// required variables
const monthHeading = document.querySelector('.heading'),
    monthArray = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"],
    nextPrevBtn = document.querySelectorAll('.icons i');


// to get date
let date = new Date(),
    cMonth = date.getMonth(),
    cYear = date.getFullYear(),
    cDay = date.getDay();

// 01 to make calendar dynamic
const calendarDynamic = () => {
    // 02 showing month in html
    monthHeading.innerText = `${monthArray[cMonth]} ${cYear}`
    // 03 making dates dynamic in html
    let endDateofcMonth = new Date(cYear, cMonth + 1, 0).getDate(),
        endDayofcMonth = new Date(cYear, cMonth + 1, 0).getDay(),
        startDayofcMonth = new Date(cYear, cMonth, 1).getDay(),
        endDateofpMonth = new Date(cYear, cMonth, 0).getDate(),
        liTag = '',
        liTagCount = 0;
    //05 to add previous month dates
    for (let i = startDayofcMonth; i > 0; i--) {
        liTag += `<li class="inactive">${endDateofpMonth - i + 1}</li>`
        liTagCount++
    }
    //04 for inserting dates of current month in html
    for (let i = 1; i <= endDateofcMonth; i++) {
        let activeClass = (i == new Date().getDate() && cMonth == new Date().getMonth() && cYear == new Date().getFullYear()) ? 'active' : '';
        liTag += `<li class="${activeClass}">${i}</li>`
        liTagCount++
    }
    //08 to avoid resizing of container on different months
    let loopCondition = 6;
    loopCondition = (liTagCount <= 35) ? loopCondition + 7 : loopCondition + 0;
    //06 for inserting dates of next month in html
    for (let i = endDayofcMonth; i < loopCondition; i++) {
        liTag += `<li class="inactive">${i - endDayofcMonth + 1}</li>`
    }
    document.querySelector('.dates').innerHTML = liTag;
}; calendarDynamic();

// 07 next prev button functions
nextPrevBtn.forEach(
    (element) => {
        element.addEventListener(
            'click', () => {
                (element.id == "next") ? cMonth++ : cMonth--;
                if (cMonth < 0 || cMonth > 11) {
                    date = new Date(cYear, cMonth);
                    cMonth = date.getMonth();
                    cYear = date.getFullYear(),
                        cDay = date.getDay();
                }
                calendarDynamic()
            }
        )
    }
)