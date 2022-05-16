function clock(){
    const shorttime = new Date()
    const time = document.querySelector("h1 span")
    time.innerText = `${String(shorttime.getHours()).padStart(2,"0")}:${String(shorttime.getMinutes()).padStart(2,"0")}:${String(shorttime.getSeconds()).padStart(2,"0")}`
}
clock()
setInterval(clock,1000)

const timetogoForm = document.querySelector(".timetogo_form")
const timetogoValue1 = document.querySelector(".timetogo_input1")
const timetogoValue2 = document.querySelector(".timetogo_input2")
const h3 = document.querySelector("h3 span")
function timecal(event){
    event.preventDefault();
    const value1= timetogoValue1.value;
    const value2=timetogoValue2.value;
    timetogoValue1.value=""
    timetogoValue2.value=""
    localStorage.setItem("time",value1);
    localStorage.setItem("min",value2);
    const value1Save = localStorage.getItem("time")
    const value2Save = localStorage.getItem("min")
    const shorttime = new Date()
  
    h3.innerText = `${String(value1Save-shorttime.getHours()).padStart(2,"0")}:${String(value2Save-shorttime.getMinutes()).padStart(2,"0")}:${String(shorttime.getSeconds()).padStart(2,"0")}`
timetogoForm.classList.add("hidden")
}
timetogoForm.addEventListener("submit",timecal);