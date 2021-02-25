var navbar = document.querySelector(".navigationMain");
var body = document.querySelector("body");
var menu = document.querySelector(".topnav");
var menuBtn = document.querySelector(".menu-btn");
var cancelBtn = document.querySelector(".cancel-btn");
var endOfVideo = document.querySelector("#welcomeAnchor");

navbar.classList.remove("sticky");

if(document.querySelectorAll(".button") != null){
  var navItems = document.querySelectorAll(".button");
}

menuBtn.onclick = ()=>{
  menu.classList.add("active");
  menuBtn.classList.add("hide");
}


for(var item of navItems){
  item.addEventListener('click', function(){
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
  });
}


cancelBtn.onclick = ()=>{
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
}
