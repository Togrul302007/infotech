function toggleMenu1(){
    document.querySelector(".nav_nav").style.display = "block";
    document.querySelector(".nav_nav").style.opacity = "1";
    document.querySelector(".hamburger").style.display = "none"
    document.querySelector(".close").style.display = "block"
    
}
function toggleMenu2(){
    document.querySelector(".nav_nav").style.display = "none";
    document.querySelector(".hamburger").style.display = "block"
    document.querySelector(".close").style.display = "none"
    
}

let dev1 = document.querySelector(".h1");

let dev2 = document.querySelectorAll(".h100");

function swap1(){
    dev1.classList.add("nova")
    for(let i = 1; i < dev2.length; i++){
        dev2[i].classList.remove("nova")
    }
    
}
function swap2(){
    let dev1 = document.querySelector(".h2");
    dev1.classList.add("nova")
    for(let i = 0; i < dev2.length; i++){
        if (i==1){
            continue;
        }
        else{
            dev2[i].classList.remove("nova")
        }
    }
}
function swap3(){
    let dev1 = document.querySelector(".h3");
    dev1.classList.add("nova")
    for(let i = 0; i < dev2.length; i++){
        if (i==2){
            continue;
        }
        else{
            dev2[i].classList.remove("nova")
        }
    }
}
function swap4(){
    let dev1 = document.querySelector(".h4");
    dev1.classList.add("nova")
    for(let i = 0; i < dev2.length; i++){
        if (i==3){
            continue;
        }
        else{
            dev2[i].classList.remove("nova")
        }
    }
}
function swap5(){
    let dev1 = document.querySelector(".h5");
    dev1.classList.add("nova")
    for(let i = 0; i < dev2.length; i++){
        if (i==4){
            continue;
        }
        else{
            dev2[i].classList.remove("nova")
        }
    }
}
function swap6(){
    let dev1 = document.querySelector(".h6");
    dev1.classList.add("nova")
    for(let i = 0; i < dev2.length; i++){
        if (i==5){
            continue;
        }
        else{
            dev2[i].classList.remove("nova")
        }
    }
}

// let visit = document.getElementById("visit");

function visit(){
    alert("Bu, rəsmi vebsayt deyil , tələbələrimiz tərəfindən yaradılmış demo vebsaytdır. Bu vebsaytın məqsədi tələbələrimizin praktik qabiliyyətinin tətbiq edilməsi və yoxlanmasıdır. Vebsayt responsive (mobil uyumlu) deyil.")
}

const my_div1 = document.querySelector(".next")
const my_div2 = document.querySelector(".diger")


function move(){
    my_div1.classList.toggle("move1");
    my_div2.classList.toggle("move2");
    // document.querySelector("body").classList.toggle("blur");
    // document.querySelector("next").classList.toggle("noblur");
}
