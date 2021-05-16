const purchaseBut=document.querySelectorAll('.package-request');
const popupPurchase= document.querySelector('.popup-purchase');
const closeSpan=document.querySelector('.close');
const requestedText=document.querySelector('.requested-type');

purchaseBut[0].addEventListener('click',()=>{
  popupPurchase.style.display='block';
  requestedText.value="Individuals";
})
purchaseBut[1].addEventListener('click',()=>{
  popupPurchase.style.display='block';
  requestedText.value="Teams";
})
purchaseBut[2].addEventListener('click',()=>{
  popupPurchase.style.display='block';
  requestedText.value="Business";
})
purchaseBut[3].addEventListener('click',()=>{
  popupPurchase.style.display='block';
  requestedText.value="Custom";
})
closeSpan.addEventListener('click',()=>{
  popupPurchase.style.display = "none";
})
window.onclick = function(event) {
  if (event.target == popupPurchase) {
    popupPurchase.style.display = "none";
  }
}
