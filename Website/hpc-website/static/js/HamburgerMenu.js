var navbar = document.querySelector(".navigation");
var body = document.querySelector("body");
var menu = document.querySelector(".topnav");
var menuBtn = document.querySelector(".menu-btn");
var cancelBtn = document.querySelector(".cancel-btn");

if(document.querySelector('#welcomeAnchor') != null){
  var endOfVideo = document.querySelector("#welcomeAnchor");
}


menuBtn.onclick = ()=>{
  menu.classList.add("active");
  menuBtn.classList.add("hide");
}

cancelBtn.onclick = ()=>{
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
}

window.onscroll = ()=>{

  if(document.querySelector('#landingVideo') != null){
    if(this.scrollY > 50){
      navbar.classList.add("sticky")
    }else {
      navbar.classList.remove("sticky");
    }
  }


  /*if(endOfVideo != null){
    if(this.scrollY >= endOfVideo.getBoundingClientRect().bottom){
      navbar.classList.add("sticky");
    }else {
      navbar.classList.remove("sticky");
    }
    */
}
