const increase=document.getElementById("increase");
const reset=document.getElementById("reset");
const decrease=document.getElementById("decrease");
const countlabel=document.getElementById("countlabel");
let count=0;
increase.onclick=function(){
    count++;
    countlabel.innerHTML=count;
}
reset.onclick=function(){
    count=0;
    countlabel.textContent=count;
}
decrease.onclick=function(){
    count--;
    countlabel.textContent=count
}