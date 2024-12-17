let charanpic=document.getElementById("charan")
function getcharan(){
    charanpic.src="https://w0.peakpx.com/wallpaper/22/939/HD-wallpaper-ram-charan-ka-pink-tshirt-actor-glasses-smile-south-indian.jpg"
}

let ntrpic=document.getElementById("ntr")
function getntr(){
    ntrpic.src="https://cdn.gulte.com/wp-content/uploads/2023/04/NTR-War-2.jpg"
}

let vdpic=document.getElementById("vd")
function getvd(){
    vdpic.src="https://www.cinejosh.com/newsimg/newsmainimg/is-monotony-creeping-in-vijay-devarakonda_b_2707190307.jpg"
}

let viratpic=document.getElementById("virat")
viratpic.onclick=function getvirat(){
    viratpic.src="https://www.livehindustan.com/lh-img/smart/img/2024/09/12/1200x900/kohli_1726140759501_1726140766468.jpg"
}

let rohitpic=document.getElementById("rohit")
rohitpic.ondblclick=function getrohit(){
      rohitpic.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3x-2Opxl_0nwEoTB-Ok7LgcfXKAnR3AXbsQ&s"
}

let hardikpic=document.getElementById("hardik")
hardikpic.onmouseover=function gethardik(){
    hardikpic.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP1fovgKylPGxpl4ceByGdIw89AvfqG6-jHA&s"
}

let inputcheck=document.querySelector("input")
inputcheck.onkeypress=function(){
    document.body.style.backgroundColor="red"
}

let btn1=document.getElementById("clicked")
btn1.onclick=function(){
    btn1.style.width="250px"
    btn1.style.height="100px"
    btn1.style.backgroundColor="Yellow"
    btn1.style.color="black"
}

let btn2=document.getElementById("dbled")
btn2.ondblclick=function(){
    btn2.style.width="250px"
    btn2.style.height="100px"
    btn2.style.backgroundColor="purple"
    btn2.style.color="white"
}

let btn3=document.getElementById("hover")
btn3.onmouseover=function(){
    btn3.style.width="250px"
    btn3.style.height="100px"
    btn3.style.backgroundColor="green"
    btn3.style.color="white"
}

let ptag=document.querySelectorAll("p")
ptag[0].onmouseover=function(){
for(i=0;i<ptag.length;i++){
    ptag[i].style.backgroundColor="yellow"
    ptag[i].style.color="red"
}}


let para=document.getElementsByClassName("para")
for(i=0;i<para.length;i++){
    para[i].style.backgroundColor="purple"
    para[i].style.color="white"
}
let a=[1,2,3,4,5,6,5]
console.log(a.filter(x=> x>=3 && x%3 ==0))
console.log(a)

let z=[1,2,3,4,5,6,7,9]
console.log(z.map(x=>x*2))
console.log(z)

let p=[1,2,3,4,5]
p.forEach(x=>console.log(x*2))
console.log(p)