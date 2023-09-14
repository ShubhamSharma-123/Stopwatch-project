let second = 0
let ms = 0
let minute = 0


let getSecond = document.querySelector('.second')
let getMinutes = document.querySelector('.minutes')
let getMiliSecond = document.querySelector('.ms')

let start_btn = document.querySelector('.start-btn');
let stop_btn  = document.querySelector('.stop-btn')
let reset_btn = document.querySelector('.reset-btn');

let intervalId;

start_btn.addEventListener('click', ()=>{
    intervalId = setInterval(startTimer, 10)
})



stop_btn.addEventListener('click', ()=>{
    clearInterval(intervalId)
})


reset_btn.addEventListener('click', ()=>{
    clearInterval(intervalId)
    ms = '00'
    minute = '00'
    second = '00'
    getMiliSecond.innerHTML = ms
    getSecond.innerHTML = second
    getMinutes.innerHTML = minute
})



function startTimer(){
    ms++;
    if(ms<=9){
       getMiliSecond.innerHTML = '0'+ms 
    }
    if(ms>9){
        getMiliSecond.innerHTML = ms;
    }

    if(ms>99){
        second++;

        if(second<=9){getSecond.innerHTML = '0' + second
    }
    if(second>9){
        getSecond.innerHTML =  second  
    }

        ms = 0
        getMiliSecond.innerHTML = ms
    }
    if(second>59){
        minute++;
        getMinutes.innerHTML = '0'+ minute
        second = 0
        getSecond.innerHTML = '0'+second
    }
    if(minute>9){
        getMinutes.innerHTML = minute
    }
}