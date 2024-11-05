let colors={
  red:["rgb(255,0,0)","rgb(255,99,71)","rgb(220,20,60)","rgb(139,0,0)","rgb(128,0,0)","rgb(164,0,0)","rgb(174,12,0)","rgb(196,2,51)",
    "rgb(200,8,21)","rgb(165,42,42)","rgb(226,6,44)","rgb(171,75,82)","rgb(218,44,67)","rgb(218,44,67)",
    "rgb(233,116,81)","rgb(255,105,97)","rgb(255,105,97)","rgb(239,48,56)","rgb(215,59,62)","rgb(255,3,62)"
  ],
  green:["rgb(0,128,0)","rgb(144,238,144)","rgb(143,188,143)","rgb(50,205,50)","rgb(60,179,113)","rgb(34,139,34)","rgb(0,100,0)",
    "rgb(1,68,33)","rgb(25,89,5)","rgb(0,86,63)","rgb(0,102,0)","rgb((0,106,78)","rgb(27,77,62)","rgb(42,128,0)",
  "rgb(19,136,8)","rgb(0,145,80)","rgb(0,159,107)","rgb(0,158,96)","rgb(141,182,0)","rgb(76,187,23),"
  ],
  blue:["rgb(0,0,255)","rgb(35,206,250)","rgb(176,196,222)","rgb(25,25,112)","rgb(0,33,71)","rgb(0,51,102)","rgb(18,97,128)",
    "rgb(72,61,139)","rgb(164,221,237)","rgb(29,41,81)","rgb(0,46,99)","rgb(84,90,167)","rgb(0,112,255)","rgb(83,104,149)",
    "rgb(65,105,225)","rgb(100,149,237)","rgb(15,77,146)","rgb(70,130,180)","rgb(0,35,135)","rgb(4,22,144)"]
  }
   for(let x in colors){
    let color="";
    for (let y of colors[x]) {
     color+="<option>"+y+"</option>"
   }
   document.getElementById(x).innerHTML= color;
  }
   let pic=["box1","box2","box3","box4","box5","box6","box7","box8","box9","box10","box11","box12","box13","box14","box15",
       "box16","box17","box18","box19","box20","box21","box22","box23","box24"]
   function changeColor(value){
    let n= parseInt(Math.random()*24)
    document.getElementById(pic[n]).style.backgroundColor= value;
}
