const navButtton = document.querySelector(".nav-button");
const list=document.querySelector(".nav-burger");
const listItems= document.querySelectorAll('li');
const desktopContainer=document.querySelector('.desktop-container');
const bodyy=document.querySelector('body');
const imgClick=document.querySelectorAll('.h3-click');
const homeImg = document.querySelectorAll('.img1');
const homeText= document.querySelectorAll('.text1');
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');
const rdStandard = document.querySelectorAll('.rd-standard');
const standardPrice = document.querySelectorAll('.standard-price');
const rdPremium = document.querySelectorAll('.rdPremium');
const premiumPrice = document.querySelectorAll('.premiumPrice');
const rdElite = document.querySelectorAll('.rdElite');
const elitePrice = document.querySelectorAll('.elitePrice');
const requestedText=document.querySelector('.requested-type');
const options = {
  root:null,
  threshold:0,
  rootMargin:"0px 0px -150px 0px"
}
const observer = new IntersectionObserver((entries,observer)=>{
  entries.forEach(entry =>{
      if(!entry.isIntersecting){
        return;
      }
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
  })
},options);
faders.forEach(section=>{
  observer.observe(section);
})
sliders.forEach(slide=>{
  observer.observe(slide);
})
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
rdStandard[0].addEventListener('click',()=>{
  standardPrice[0].childNodes[0].textContent='200 EGP ';
  standardPrice[0].childNodes[1].textContent='/card';
  requestedText.value='1-5';
})
rdStandard[1].addEventListener('click',()=>{
  standardPrice[0].childNodes[0].textContent='160 EGP ';
  requestedText.value='6-15';
})
rdStandard[2].addEventListener('click',()=>{
  standardPrice[0].childNodes[0].textContent='120 EGP ';
  requestedText.value='16-25';
})
rdStandard[3].addEventListener('click',()=>{
  standardPrice[0].childNodes[0].textContent='Custom price';
  standardPrice[0].childNodes[1].textContent='';
  requestedText.value='25+';
})

rdPremium[0].addEventListener('click',()=>{
  premiumPrice[0].childNodes[0].textContent='250 EGP ';
  premiumPrice[0].childNodes[1].textContent='/card';
  requestedText.value='1-5';
})
rdPremium[1].addEventListener('click',()=>{
  premiumPrice[0].childNodes[0].textContent='210 EGP ';
  requestedText.value='6-15';
})
rdPremium[2].addEventListener('click',()=>{
  premiumPrice[0].childNodes[0].textContent='170 EGP ';
  requestedText.value='16-25';
})
rdPremium[3].addEventListener('click',()=>{
  premiumPrice[0].childNodes[0].textContent='Custom price';
  premiumPrice[0].childNodes[1].textContent='';
  requestedText.value='25+';
})

rdElite[0].addEventListener('click',()=>{
  elitePrice[0].childNodes[0].textContent='300 EGP ';
  elitePrice[0].childNodes[1].textContent='/card';
  requestedText.value='1-5';
})
rdElite[1].addEventListener('click',()=>{
  elitePrice[0].childNodes[0].textContent='250 EGP ';
  requestedText.value='6-15';
})
rdElite[2].addEventListener('click',()=>{
  elitePrice[0].childNodes[0].textContent='200 EGP ';
  requestedText.value='16-25';
})
rdElite[3].addEventListener('click',()=>{
  elitePrice[0].childNodes[0].textContent='Custom price';
  elitePrice[0].childNodes[1].textContent='';
  requestedText.value='25+';
})
