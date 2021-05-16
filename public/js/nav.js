let prevScrollpos = window.pageYOffset;


window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector('.container').style.top = "0";
  } else if(list.style.display==='flex'  && window.innerWidth<751){
    document.querySelector('.container').style.top = "-800px";
  }
  else{
    document.querySelector('.container').style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
}
