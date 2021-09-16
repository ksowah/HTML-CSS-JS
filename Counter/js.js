let getCount = 0;
let increment = document.getElementById("count");

function increase(){
       increment.innerHTML = ++ getCount;
      
}

let saveCount = document.getElementById("saved-count");


function save(){
   saveCount.innerHTML += increment.innerHTML + ", ";
   increment.innerHTML = 0;
   getCount = 0;
}


