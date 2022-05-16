function clock(){
    const shorttime = new Date()
    const time = document.querySelector("h1 span")
    time.innerText = `${String(shorttime.getHours()).padStart(2,"0")}:${String(shorttime.getMinutes()).padStart(2,"0")}`
}
clock()
setInterval(clock,1000)
//현재시각
const leaveForm = document.querySelector(".timetogo_form")
const leaveInputH = document.querySelector(".timetogo_input1")
const leaveInputM = document.querySelector(".timetogo_input2")
function leaveclock(event){
    event.preventDefault();
    const leaveValue1 = leaveInputH.value;
    const leaveValue2 = leaveInputM.value;
    const h3 = document.querySelector("h3")
    const h3span=document.querySelector("h3 span")
    if(String(new Date().getHours())+String(new Date().getMinutes())>String(leaveValue1)+String(leaveValue2)){
        h3.innerText="퇴근을 축하드립니다😋"
    }
    else{ if(leaveValue2-new Date().getMinutes()<0){
        h3span.innerText=`${leaveValue1-new Date().getHours()-1}:${String((Math.abs(60-leaveValue2-new Date().getMinutes()))).padStart(2,"0")}`
    }
else{
    h3span.innerText=`${leaveValue1-new Date().getHours()}:${String(leaveValue2-new Date().getMinutes()).padStart(2,"0")}`
}
    }
leaveForm.classList.add("hidden")
}
leaveForm.addEventListener("submit",leaveclock);
//남은시간 계산하는 시계까지만듦 그러나 지속되기위해서 Setinterval 함수필요
//local에 저장 후에 로컬에 있는 수를 계속해서 호출하도록 해야한다.function()형태로