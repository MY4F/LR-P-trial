const navButtton = document.querySelector(".nav-button");
const list=document.querySelector(".nav-burger");
const listItems= document.querySelectorAll('li');
const desktopContainer=document.querySelector('.desktop-container');
const bodyy=document.querySelector('body');
const imgClick=document.querySelectorAll('.h3-click');
const homeImg = document.querySelectorAll('.img1');
const homeText= document.querySelectorAll('.text1');
setTimeout(()=>{
  homeImg[0].style.position='unset';
  homeImg[1].style.position='unset';
  homeImg[2].style.position='unset';
  homeText[0].style.position='unset';
  homeText[1].style.position='unset';
  homeText[2].style.position='unset';
},3000);
navButtton.addEventListener('click',()=>{
  if(list.style.top==='-560px' && window.innerWidth<751|| list.style.top==='-560px'  && window.innerWidth<751 ){
    list.style.top = '68px';
    setTimeout(()=>{
      document.querySelector('.container').style.top = "0px";
    },0);
  }
  else{
    list.style.top = "-560px";
  }
});
listItems[0].addEventListener('click',()=>{
  if(list.style.display==='none'  && window.innerWidth<751|| list.style.display===''  && window.innerWidth<751){
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
  if(list.style.display==='none'  && window.innerWidth<751|| list.style.display===''  && window.innerWidth<751){
    list.style.display='flex';
  }
  else{
    list.style.display='';
  }
});
imgClick[0].addEventListener('click',()=>{
  window.scrollTo(0,734);
});
if(window.innerWidth<751){
  imgClick[1].addEventListener('click',()=>{
    window.scrollTo(0,670);
  });
}
window.addEventListener('resize',()=>{
if(window.innerWidth<751){
  imgClick[1].addEventListener('click',()=>{
    window.scrollTo(0,670);
  });
}
})
