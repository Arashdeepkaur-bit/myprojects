const display = document.getElementById("calculator");
function fun(value) {
    
    display.value += value; 
}

function cleardisplay() {
    
    display.value = ""; 
}

function solve() {
    

        display.value = eval(display.value); 
}

function back() {
    
    display.value = display.value.substring(0, display.value.length - 1);
}
function fun1(){

    display.value=Math.sqrt(display.value)
}

function solve() {
    try {
        const a = display.value.replace(/\^/g, '**');
        display.value = eval(a);
    } catch (error) {
        display.value = "Error";
    }
}
function power(){
    //   const display = document.getElementById("calculator");
       display.value +="^"
     }


