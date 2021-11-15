const check = document.querySelectorAll('.check');
const submitBut= document.querySelector('.form-submit');
submitBut.addEventListener('click',()=>{
  if(check[0].value.length>0 && check[1].value.length>0 && check[2].value.length>0 && check[3].value.length>0)
    alert("We recieved your message, hang tight till we reply back.");
});
