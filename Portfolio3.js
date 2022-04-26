let bu = document.querySelectorAll("#projects ul li");
let box = document.querySelectorAll(".gridP div");
bu.forEach(function (li){
    li.addEventListener("click", removeActive);
    li.addEventListener("click", removeBox);
});
// 
function removeActive() {
    bu.forEach((li) => {
      li.classList.remove("active2");
      this.classList.add("active2");
    });
  }
  function removeBox() {
    box.forEach((el) => {
        el.style.display = "none";
    });
    document.querySelectorAll(this.dataset.tp).forEach((le) => {
        le.style.display = "grid";
  
    });
}
/////////////////////////////////////////////////////////
let skills = document.getElementById("skills");
let probare = document.querySelectorAll(".prog progress");
let imgs = document.querySelector(".imgs");
let about = document.getElementById("about");
let imgab = document.querySelector(".content2 img");
let scbut = document.querySelector(".up");
window.onscroll = function () {
  if (this.scrollY >= 700){
    scbut.style.display = "flex";
    scbut.style.animation = "slide-right .5s cubic-bezier(.25,.46,.45,.94) both"
  }
  else{
    scbut.style.display = "none";
  }
  if(window.scrollY >= skills.offsetTop - 250){
    probare.forEach((pro) => {
      pro.setAttribute("value",pro.dataset.mp);
    });
    imgs.style.animation = "slide-in-left .5s cubic-bezier(.25,.46,.45,.94) both";
  }
  if(window.scrollY >= about.offsetTop - 250){
    imgab.style.animation = "slide-in-left .5s cubic-bezier(.25,.46,.45,.94) both";
  }
}
scbut.onclick = function () {
  window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
};
/////////////////////////////////
let btnmenu = document.querySelector(".menu");
btnmenu.addEventListener("click", showmenu);
let navlist = document.querySelector("nav");
let navlogo = document.querySelector("nav .logo");
let closemenu = document.querySelector(".close");
function showmenu() {
  navlist.style.display = "block";
  navlogo.style.display = "none";
  navlist.style.animation = "slide-in-left 0.6s cubic-bezier(.25,.46,.45,.94) both";
}
closemenu.addEventListener("click",closemenuf);
function closemenuf() {
  navlist.style.display = "none";
}