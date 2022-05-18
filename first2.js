function clock(){
    const shorttime = new Date()
    const time = document.querySelector("h1 span")
    time.innerText = `${String(shorttime.getHours()).padStart(2,"0")}:${String(shorttime.getMinutes()).padStart(2,"0")}`
}
clock()
setInterval(clock,1000)
//시계완성
const hoursInput = document.querySelector(".timetogo_input1")
const miniuteInput = document.querySelector(".timetogo_input2")
const timeform = document.querySelector(".timetogo_form")
const togospan = document.querySelector("h3 span")
function savedtime(event){
event.preventDefault();
lastclock();
setInterval(lastclock,1000);
const hoursValue = hoursInput.value;
const miniuteValue= miniuteInput.value;
localStorage.setItem("hours",hoursValue);
localStorage.setItem("miniute",miniuteValue);
timeform.classList.add("hidden")
}
function lastclock(){
    const short = new Date()
 const V1= hoursInput.value;
 const V2 = miniuteInput.value;
 if(V2-short.getMinutes()<0){
     togospan.innerText=`${V1-short.getHours()-1}시간 ${V2-short.getMinutes()+60} 분!`
 }
 else{
     togospan.innerText=`${V1-short.getHours()}시간${V2-short.getMinutes()} 분!`
 }
}

const savedhours = localStorage.getItem("hours")
const savedMin= localStorage.getItem("miniute")
if(savedhours==null){
    timeform.addEventListener("submit",savedtime);
 timeform.classList.add("hidden")
}
else{
    timeform.classList.add("hidden")
    savedTime()
    setInterval(savedTime,1000);
}
function savedTime(){
    const short1 = new Date()
    if(savedMin-short1.getMinutes()<0){
        togospan.innerText=`${savedhours-short1.getHours()-1}시간 ${savedMin-short1.getMinutes()+60} 분!`
    }
    else{
        togospan.innerText=`${savedhours-short1.getHours()}시간${savedMin-short1.getMinutes()} 분!`
    }
    }
//시간을 만드는건했지만 굉장히지저분하다.. function을 인자받아서 다시 사용하는 법을 배워야한다.

const todoForm = document.querySelector(".todo")
const todoInput = document.querySelector(".todo input")
let array = [];
function saveTodos(){
    localStorage.setItem("todolist",JSON.stringify(array));
}
function submit(event){
event.preventDefault();
const todoValue = todoInput.value;
todoInput.value=""
const todoValueObj = {text:todoValue,id:Date.now()}
paintTodo(todoValueObj);
array.push(todoValueObj);
localStorage.setItem("todolist",JSON.stringify(array))

}
const savedarray = localStorage.getItem("todolist")
if(savedarray!==null){
    const supersavedarray = JSON.parse(savedarray);
    supersavedarray.forEach(paintTodo);
    array=supersavedarray;

}

function paintTodo(todoValueObj){
    const ul = document.querySelector("ul")
    const li = document.createElement("li")
    li.id = todoValueObj.id
    const span = document.createElement("span")
    const button = document.createElement("button");
    li.innerText = "📌"+todoValueObj.text
    button.innerText = "❌"
    ul.appendChild(span)
    span.appendChild(li)
    li.appendChild(button);
    button.addEventListener("click",estimate);
}
function estimate(event){
    const target = event.target.parentElement;
    target.remove();
  console.log(parseInt(target.id))
  function rearray(array){return array.id!==parseInt(target.id)}
  array= array.filter(rearray);
  saveTodos()
}
todoForm.addEventListener("submit", submit)
//todolist

const moneyForm = document.querySelector(".moneyday")
const moneyInput = document.querySelector(".moneyday input")

function moneyday(event){
    event.preventDefault()
    paintmoney()

}
function paintmoney(){
    const moneyValue= moneyInput.value;
    const h4 = document.querySelector("h4")
    h4.innerText=moneyValue;
    localStorage.setItem("moneyday",moneyValue)
}
moneyForm.addEventListener("submit",moneyday)