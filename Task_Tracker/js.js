let inputStore = []
let taskList = document.getElementById("ul-list");
let taskBox = document.getElementById("task-box");
let saveBtn = document.getElementById("save-btn");
let delBtn = document.getElementById("del-btn");
const input = document.querySelector("form input"),
counter = document.querySelector("form .counter"),
maxLength = input.getAttribute("maxlength")

input.onkeyup = () => {
    counter.innerText = maxLength - input.value.length;
}

const storeInLocalStorage = JSON.parse(localStorage.getItem("store"))

if(storeInLocalStorage){
    inputStore = storeInLocalStorage
    render();
}

function render(){
    let items = ""
    for(let i = 0; i < inputStore.length; i++){
        items += `<ul>
                        <li>
                             📌  ${inputStore[i]} 
                       </li>
                </ul>`
    }

    taskList.innerHTML = items
}


saveBtn.addEventListener("click", function(){
    inputStore.unshift(taskBox.value) 
    taskBox.value = ""
   localStorage.setItem("store", JSON.stringify(inputStore))
    render();
})

delBtn.addEventListener("click", function(){
    localStorage.clear()
    inputStore = []
    render()
})