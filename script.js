let tb=document.getElementsByClassName("taskbar")[0]
let sm=document.getElementsByClassName("startmenu")[0]
tb.addEventListener("click",()=>{
    if(sm.style.bottom=="60px"){
        sm.style.bottom="-650px"
    }
    else{
        sm.style.bottom="60px"
    }
})