 display = document.getElementById("calculator");
function fun(value) {
    
    display.value += value; 
}
function cleardisplay() {
    
    display.value = ""; 
}
function fun2() {  
display.value=display.value.replace("%","/100")
        display.value = eval(display.value); 
}
function back() {   
    display.value = display.value.substring(0, display.value.length - 1);
}
function fun1(){
    display.value=display.value.replace("√"," ")
    display.value=Math.sqrt(display.value)
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
    else if(x.includes("%")){
        fun2()
    }
    else{
        display.value= eval(display.value); 
}
    }



