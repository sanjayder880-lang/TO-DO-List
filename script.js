const input = document.getElementById("input");
const list  = document.getElementsById("list");


input.addEventListener("keydown", function (e){
    if(e.key === "enter"){
        const text = input.value.trim();
        if(text === "") return;
        const li = document.createElement("li");
        li.textContent = "text";
        list.appendChild(li);
        input.value =""
    }
})