const navButtton = document.querySelector(".nav-button");
const list=document.querySelector(".nav-burger");
const listItems= document.querySelectorAll('li');
const desktopContainer=document.querySelector('.desktop-container');
const bodyy=document.querySelector('body');
navButtton.addEventListener('click',()=>{
  if(list.style.top==='-510px' && window.innerWidth<751|| list.style.top==='-510px'  && window.innerWidth<751 ){
    list.style.top = '77px';
    setTimeout(()=>{
      document.querySelector('.container').style.top = "0px";
    },0);
  }
  else{
    list.style.top = "-510px";
  }
});
listItems[0].addEventListener('click',()=>{
  if(list.style.display==='none' && window.innerWidth<751|| list.style.display==='' && window.innerWidth<751){
    list.style.display='flex';
  }
  else{
    list.style.display='';
  }
});

listItems[1].addEventListener('click',()=>{
  if(list.style.display==='none' && window.innerWidth<751|| list.style.display==='' && window.innerWidth<751){
    list.style.display='flex';
  }
  else{
    list.style.display='';
  }
});

listItems[2].addEventListener('click',()=>{
  if(list.style.display==='none' && window.innerWidth<751|| list.style.display==='' && window.innerWidth<751){
    list.style.display='flex';
  }
  else{
    list.style.display='';
  }
});
window.addEventListener('resize',()=>{
  if(window.innerWidth<751){
    desktopContainer.classList.remove("desktop-container");

  }
  else{
    desktopContainer.classList.add("desktop-container");
  }
});
if(window.innerWidth<751){
  desktopContainer.classList.remove("desktop-container");
}
else {
    desktopContainer.classList.add("desktop-container");
}
