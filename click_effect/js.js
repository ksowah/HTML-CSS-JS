alert("Click anywhere on the screen to see change")

let change = document.getElementById("body");
var text0 = document.getElementById("txt0");
var text1 = document.getElementById("txt1");
var text2 = document.getElementById("txt2");

        function Func(){

        if(text0.innerHTML === "Hello" && text1.innerHTML === "Code" && text2.innerHTML === "World!"){

            text0.innerHTML = "This is";
            text1.innerHTML = "Just";
            text2.innerHTML = "JavaScript";
            change.style.backgroundColor = ("honeydew");
             change.style.color = ("rgb(24, 22, 22)")
            
        }else{
            text0.innerHTML = "Hello";
            text1.innerHTML = "Code";
            text2.innerHTML = "World!";
            change.style.backgroundColor = ("rgb(24, 22, 22)");
             change.style.color = ("honeydew")
            
        }

    }

        