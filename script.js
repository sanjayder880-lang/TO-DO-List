const input = document.getElementById("input");
const list  = document.getElementsByClassName("list");
const enter = document.getElementById("enter");

function addtask() {
    const text = input.value;

    if(text === "") return;

    const li = document.createElement("li");
    li.textcontent = text;

    li.addEventListener("click",() =>{
    li.classList.toggle("completed");
    });
}

li.addEventListener