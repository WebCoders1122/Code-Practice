//01 required variables from html file
let hours = document.querySelector('#hours');
let min = document.querySelector('#min');
let sec = document.querySelector('#sec');
let msec = document.querySelector('#msec');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');
let [hrs, mins, secs, msecs] = [0,0,0,0]
let startid = true;

const insert = () => {
    msec.value = msecs
sec.value = secs
min.value = mins
hours.value = hrs
};
// 02 to calculate timer
const runtimer = () => {
msecs += 25;
if (msecs >= 1000) {
    secs++;
    msecs = 0
}
if (secs >= 60) {
    mins++;
    secs = 0
    msecs = 0
}
if (mins >= 60) {
    hrs++;
    msecs = 0
    secs = 0
    mins = 0
}
    insert()
};

// 01
start.addEventListener('click', () => {
    if (startid) {
        x = setInterval(runtimer, 25)
        startid = false        
    }
})

// 03
stop.addEventListener('click', () => {
    clearInterval(x)
    startid = true
})

//05 
reset.addEventListener('click', () => {
    [hrs, mins, secs, msecs] = [0,0,0,0]
    insert()
    clearInterval(x)
    startid = true
})
