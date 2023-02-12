let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".sticky-button a");
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

let body = document.querySelector("body");
let navBar = document.querySelector(".nav-items");
let menuBtn = document.querySelector(".ham-burger");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
}

let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0 ; i < navLinks.length; i++){
  navLinks[i].addEventListener("click", ()=>{
    navBar.classList.remove("active")
    menuBtn.style.opacity = "1"
    body.style.overflow = "auto";
  })
}


let homeimg = document.querySelector(".left img")
let homepra = document.querySelector(".right")
let btn = document.querySelector(".home button")
let first = document.querySelector(".first-text")
let second = document.querySelector(".second-text")
let third = document.querySelector(".third-text")
window.addEventListener("load", ()=>{
  homeimg.style.transform = "translateX(0px)"
  homepra.style.transform = "translateX(0px)"
  btn.style.transform = "translateX(0px)"
  first.style.transform ="translateX(0px)"
  second.style.transform ="translateX(0px)"
  third.style.transform ="translateX(0px)"
})