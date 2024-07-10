let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");
btn.addEventListener("click", function () {
    if(inp.value!=""){
    let li = document.createElement("li");
    let delbtn = document.createElement("button");
    delbtn.classList.add('delete');
    delbtn.innerText = "x";
    li.innerText = `${inp.value} `;
    ul.appendChild(li);
    li.appendChild(delbtn);
    inp.value = "";}
    else{
        alert("task cant be empty");
    }
})
ul.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        let del = document.querySelector('.delete');
        let par = del.parentElement;
        par.remove();
    }
})
 