const bioBtnEdit = document.querySelector('.bio-btn-edit');
const bioBtnSave = document.querySelector('.bio-btn-save');
const bioBox = document.querySelector('.bio-words');
const bioInput = document.querySelector('.bio-input');
const bioCan= document.querySelector('.bio-btn-cancel');
const sclBtnEdit = document.querySelector('.scl-btn-edit');
const sclBtnSave = document.querySelector('.scl-btn-save');
const sclBtnAdd = document.querySelector('.scl-btn-add');
const sclBtnRem = document.querySelector('.scl-btn-rem');
const sclBtnDel = document.querySelector('.scl-btn-del');
const sclBtnCan = document.querySelector('.scl-btn-cancel');
const othBtnEdit = document.querySelector('.oth-btn-edit');
const othBtnSave = document.querySelector('.oth-btn-save');
const othBtnAdd = document.querySelector('.oth-btn-add');
const othBtnRem = document.querySelector('.oth-btn-rem');
const othBtnDel = document.querySelector('.oth-btn-del');
const othBtnCan = document.querySelector('.oth-btn-cancel');
const contentScl =document.querySelector('.dropdown-content-scl');
const contentOth =document.querySelector('.dropdown-content-oth');
const linkInputScl = document.querySelector('.scl-input');
const linkInputOth = document.querySelector('.oth-input');
const noOfLinks = document.querySelector('.oth-input5');
const linksContainer = document.querySelector('.client-social-links');
const othLinksContainer = document.querySelector('.client-other-links');
const ps = document.createElement('span');
const scTypeInput = document.querySelector('.scl-input2');
const scTypeInput2 = document.querySelector('.oth-input3');
const noOfIcons = document.querySelector('.scl-input3');
const linkName= document.querySelector('.oth-input4');
const pdfbutt = document.querySelector('.pdf-upload');
const pdfInput= document.querySelector('.pdf-input');
// contacts buttons
const conEdit = document.querySelector('.contact-btn-edit');
const conCancel = document.querySelector('.contact-btn-cancel');
const conForm = document.querySelector('.login-form');

 bioedit = () =>{
   bioCan.style.display='block';
   bioBtnEdit.style.display='none';
   bioBtnSave.style.display='block';
   bioInput.style.display='block';
   bioBox.style.display='none';
   bioInput.innerText=bioBox.innerText
};
biosave = () => {
  bioBox.innerText = bioInput.value;
  bioBox.style.display='flex';
  bioInput.style.display='none';
  bioBtnEdit.style.display='block';
  bioBtnSave.style.display='none';
}
biocan = () => {
  bioCan.style.display='none';
  bioInput.style.display='none';
  bioBox.style.display='flex';
  bioBtnEdit.style.display='block';
  bioBtnSave.style.display='none';
}


scledit = () => {
  sclBtnEdit.style.display='none';
  sclBtnSave.style.display='none';
  sclBtnAdd.style.display='block';
  sclBtnRem.style.display='block';
}
scladd = () =>{
  contentScl.style.display='flex';
  sclBtnAdd.style.display='none';
  sclBtnRem.style.display='none';
  sclBtnSave.style.display='none';
  sclBtnCan.style.display='block';
}
sclsave = () =>{
  linkInputScl.style.display='none';
  sclBtnSave.style.display='none';
  sclBtnEdit.style.display='block';
}
const links = linksContainer.querySelectorAll('a');
iconDel= (x) =>{
  scTypeInput.value = linksContainer.children[x].outerHTML;
  noOfIcons.value=links.length;
  linkInputScl.style.display='none';
  sclBtnEdit.style.display='block';
}
for(let i = 1 ;i<links.length*2;i+=2){
  const removeButton = document.createElement("button");
  linksContainer.insertBefore(removeButton,linksContainer.children[i]);
  removeButton.style.display="none";
  removeButton.innerHTML="<i class=\"fas fa-trash-alt\"></i>";
  removeButton.classList.toggle('iconDelete');
  removeButton.setAttribute('onclick',`iconDel(${i-1})`);
  removeButton.setAttribute('all','unset');
  removeButton.setAttribute('type','submit');
  removeButton.setAttribute('form','form-mid-id');
}
sclrem = () => {
  const removeButton = document.querySelectorAll('.iconDelete');
  for(let i = 0 ;i<links.length;i++){
    removeButton[i].style.display="";
  }
  sclBtnAdd.style.display='none';
  sclBtnRem.style.display='none';
  sclBtnCan.style.display='block';
}
sclcan = () => {
  const removeButton = document.querySelectorAll('.iconDelete');
  for(let i = 0 ;i<links.length;i++){
    removeButton[i].style.display="none";
  }
  sclBtnCan.style.display='none';
  sclBtnSave.style.display='none';
  contentScl.style.display='none';
  sclBtnEdit.style.display='block';
  linkInputScl.style.display='none';
}




othedit = () => {
  othBtnEdit.style.display='none';
  othBtnSave.style.display='none';
  othBtnAdd.style.display='block';
  othBtnRem.style.display='block';
}
othadd = () =>{
  othBtnCan.style.display='block';
  contentOth.style.display='flex';
  othBtnAdd.style.display='none';
  othBtnRem.style.display='none';
  othBtnSave.style.display='none';
}
othsave = () =>{
  linkName.style.display='none';
  linkInputOth.style.display='none';
  othBtnSave.style.display='none';
  othBtnEdit.style.display='block';
}
const links2 = othLinksContainer.querySelectorAll('div');
linkDel= (x) =>{
  scTypeInput2.value = othLinksContainer.children[x].outerHTML;
  linkName.value = othLinksContainer.children[x].children[1].title;
  noOfLinks.value=links.length;
  linkInputOth.style.display='none';
  othBtnEdit.style.display='block';
}
for(let i = 1 ;i<links2.length*2;i+=2){
  const removeButton = document.createElement("button");
  othLinksContainer.insertBefore(removeButton,othLinksContainer.children[i]);
  removeButton.style.display="none";
  removeButton.innerHTML="<i class=\"fas fa-trash-alt\"></i>";
  removeButton.classList.toggle('linkDelete');
  removeButton.setAttribute('onclick',`linkDel(${i-1})`);
  removeButton.setAttribute('all','unset');
  removeButton.setAttribute('type','submit');
  removeButton.setAttribute('form','form-link-mid-id');
}
othrem = () => {
  const removeButton = document.querySelectorAll('.linkDelete');
  for(let i = 0 ;i<links2.length;i++){
    removeButton[i].style.display="";
  }
  othBtnAdd.style.display='none';
  othBtnRem.style.display='none';
  othBtnCan.style.display='block';
}
othcan = () => {
  const removeButton = document.querySelectorAll('.linkDelete');
  for(let i = 0 ;i<links2.length;i++){
    removeButton[i].style.display="none";
  }
  pdfbutt.style.display='none';
  othBtnSave.style.display='none';
  othBtnCan.style.display='none';
  linkInputOth.style.display='none';
  linkName.style.display='none';
  contentOth.style.display='none';
  othBtnEdit.style.display='block';
  linkInputOth.style.display='none';
}



fb = () => {
  sclBtnSave.name='facebook'
  linkInputScl.style.display='flex';
  contentScl.style.display='none';
    sclBtnSave.style.display = 'block';
    scTypeInput.value = 'facebook';
}
ig = () => {
  sclBtnSave.name='instagram'
  linkInputScl.style.display='flex';
  contentScl.style.display='none';
    sclBtnSave.style.display = 'block';
    scTypeInput.value = 'instagram';
}
wp = () => {
  sclBtnSave.name='whatsapp'
  linkInputScl.style.display='flex';
  contentScl.style.display='none';
  sclBtnSave.style.display = 'block';
  scTypeInput.value = 'whatsapp';
  linkInputScl.placeholder='Enter your number without +20'
}
tw = () => {
  sclBtnSave.name='twitter'
  linkInputScl.style.display='flex';
  contentScl.style.display='none';
    sclBtnSave.style.display = 'block';
    scTypeInput.value = 'twitter';
}
gh = () => {
  sclBtnSave.name='github'
  linkInputScl.style.display='flex';
  contentScl.style.display='none';
    sclBtnSave.style.display = 'block';
    scTypeInput.value = 'github';
}
li = () => {
  sclBtnSave.name='linkedin'
  linkInputScl.style.display='flex';
  contentScl.style.display='none';
    sclBtnSave.style.display = 'block';
    scTypeInput.value = 'linkedin';
}
be = () => {
  sclBtnSave.name='behance'
  linkInputScl.style.display='flex';
  contentScl.style.display='none';
    sclBtnSave.style.display = 'block';
    scTypeInput.value = 'behance';
}
sc = () => {
  sclBtnSave.name='snapchat'
  linkInputScl.style.display='flex';
  contentScl.style.display='none';
    sclBtnSave.style.display = 'block';
    scTypeInput.value = 'snapchat';
}
pin = () => {
  sclBtnSave.name='pinterest'
  linkInputScl.style.display='flex';
  contentScl.style.display='none';
    sclBtnSave.style.display = 'block';
    scTypeInput.value = 'pinterest';
}
wc = () => {
  sclBtnSave.name='wechat'
  linkInputScl.style.display='flex';
  contentScl.style.display='none';
  sclBtnSave.style.display = 'block';
  scTypeInput.value = 'weixin';
  linkInputScl.placeholder='Enter your WeChat ID'
}






em = () => {
  othBtnSave.name='envelope'
  linkInputOth.placeholder='Enter your E-mail'
  linkInputOth.style.display='flex';
  contentOth.style.display='none';
    othBtnSave.style.display = 'block';
    scTypeInput2.value = 'envelope';
}
wb = () => {
  linkInputOth.placeholder='Enter your website link'
  linkName.placeholder='Enter website name';
  linkName.style.display='flex';
  othBtnSave.name='website'
  linkInputOth.style.display='flex';
  contentOth.style.display='none';
    othBtnSave.style.display = 'block';
    scTypeInput2.value = 'globe';

}
loc = () => {
  linkInputOth.placeholder='Enter your location link'
  linkName.placeholder='Enter Location name';
  linkName.style.display='flex';
  othBtnSave.name='map-marker-alt'
  linkInputOth.style.display='flex';
  contentOth.style.display='none';
    othBtnSave.style.display = 'block';
    scTypeInput2.value = 'map-marker-alt';

}
cl = () => {
  linkInputOth.placeholder='Enter your number'
  linkName.placeholder='Enter a name for the number';
  othBtnSave.name='phone'
  linkName.style.display='flex';
  linkInputOth.style.display='flex';
  contentOth.style.display='none';
    othBtnSave.style.display = 'block';
    scTypeInput2.value = 'phone-alt';

}
pdf = () => {
  pdfInput.style.display='block';
  pdfbutt.style.display='flex';
  linkName.placeholder='Enter PDF name';
  othBtnSave.name='file-pdf'
  contentOth.style.display='none';
  othBtnSave.style.display = 'none';
  scTypeInput2.value = 'file-pdf';
}

contactEdit = () =>{
  conCancel.style.display='inline-block';
  conForm.style.display='block';
  conEdit.style.display='none';
}

contactCan = () =>{
  conForm.style.display='none';
  conEdit.style.display='block';
  conCancel.style.display='none';
}
