const promo = document.querySelector('.promo-validation');
promo.addEventListener('click',()=>{
  let code = document.querySelector('.code').value;
  if(code.toLowerCase()==="tedxmfis20"){
    promo.style.backgroundColor="#99ff99";
    promo.innerText="Applied";
  }
  else{
    promo.innerText="Denied";
  }
})
