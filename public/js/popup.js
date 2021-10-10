const purchaseBut=document.querySelectorAll('.package-request');
const popupPurchase= document.querySelector('.popup-purchase');
const closeSpan=document.querySelector('.close');
const img = document.querySelectorAll('.pop-img');
purchaseBut[0].addEventListener('click',()=>{
  if(!rdStandard[0].checked && !rdStandard[1].checked && !rdStandard[2].checked && !rdStandard[3].checked){
    alert("Choose the quantity you desire to reveal the price, and to be able to order.");
    return;
  }
  img[0].src='/images/standard-card2.jpg';
  img[1].src='/images/standard-back-card.jpg';
  popupPurchase.style.display='flex';
  requestedText.value+=` Standard`;

})
purchaseBut[1].addEventListener('click',()=>{
  if(!rdPremium[0].checked && !rdPremium[1].checked && !rdPremium[2].checked && !rdPremium[3].checked){
    alert("Choose the quantity you desire to reveal the price, and to be able to order.");
    return;
  }
  img[0].src='/images/prem-card2.jpg';
  img[1].src='/images/prem-card-back.jpg';
  popupPurchase.style.display='flex';
  requestedText.value+=` Premium`;
  console.log(img[0].src);
})
purchaseBut[2].addEventListener('click',()=>{
  if(!rdElite[0].checked && !rdElite[1].checked && !rdElite[2].checked && !rdElite[3].checked){
    alert("Choose the quantity you desire to reveal the price, and to be able to order.");
    return;
  }
  img[0].src='/images/elite-card2.jpg';
  img[1].src='/images/elite-card-back.jpg';
  popupPurchase.style.display='flex';
  requestedText.value+=` Elite`;
})
closeSpan.addEventListener('click',()=>{
  popupPurchase.style.display = "none";
})
window.onclick = function(event) {
  if (event.target === popupPurchase) {
    popupPurchase.style.display = "none";
  }
}
