
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    const navButtton = document.querySelector(".nav-button");
    const list=document.querySelector("ul");
    document.querySelector('.container').style.top = "0";
  } else if(list.style.display==='flex'  && window.innerWidth<751){
    document.querySelector('.container').style.top = "-800px";
    list.style.top = "-560px";
  }
  else{
    document.querySelector('.container').style.top = "-160px";
    list.style.top = "-560px";
  }
  prevScrollpos = currentScrollPos;
}
