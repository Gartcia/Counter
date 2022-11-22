let counter = 0;
const increase = document.querySelector("#increase");
const decrease = document.querySelector("#decrease");
const reset = document.querySelector("#reset");
increase.addEventListener("click", function(){
    counter++;
    document.querySelector("#number").textContent = counter;
    if(parseInt(document.querySelector("#number").textContent) < 0){
        document.querySelector("#number").style.color = "black";
    } else {
        document.querySelector("#number").style.color = "white";
    }
})
decrease.addEventListener("click", function(){
    counter--;
    document.querySelector("#number").textContent = counter;
    if(parseInt(document.querySelector("#number").textContent) < 0){
        document.querySelector("#number").style.color = "black";
    } else {
        document.querySelector("#number").style.color = "white";
    }
})
reset.addEventListener("click", function(){
    counter = 0;
    document.querySelector("#number").textContent = counter;
    if(parseInt(document.querySelector("#number").textContent) < 0){
        document.querySelector("#number").style.color = "black";
    } else {
        document.querySelector("#number").style.color = "white";
    }
})
