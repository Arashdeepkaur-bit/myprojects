 display = document.getElementById("calculator");
function fun(value) {
    
    display.value += value; 
}

function cleardisplay() {
    
    display.value = ""; 
}

// function solve() {
    

//         display.value = eval(display.value); 
// }

function back() {
    
    display.value = display.value.substring(0, display.value.length - 1);
}
function fun1(){

    display.value=display.value.replace("Math.sqrt","√")
    display.value=eval(display.value)
}

function power(){

    display.value=display.value.replace("^","**");
    display.value=eval(display.value)
}
function solve(){
    let x=document.getElementById("calculator").value;
    if(x.includes("^")){
        power()
    }
    else if(x.includes("√")){
        fun1()
    }
    else{
        display.value= eval(display.value); 
}
    }



