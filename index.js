function toggleMenu1(){
    document.querySelector(".nav_nav").style.display = "block";
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
