function fun(value) {
    const display = document.getElementById("calculator");
    display.value += value; 
}

function cleardisplay() {
    const display = document.getElementById("calculator");
    display.value = ""; 
}

function solve() {
    const display = document.getElementById("calculator");

        display.value = eval(display.value); 
}

function back() {
    const display = document.getElementById("calculator");
    display.value = display.value.substring(0, display.value.length - 1);
}
function fun1(){
    const display=document.getElementById("calculator");
    display.value=Math.sqrt(display.value)
}
function power(value1){
     const display = document.getElementById("calculator");
   display.value=Math.pow(display.value,2);
}


