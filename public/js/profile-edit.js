const bioBtnEdit = document.querySelector('.bio-btn-edit');
const bioBtnSave = document.querySelector('.bio-btn-save');
const bioBox = document.querySelector('.bio-words');
const bioInput = document.querySelector('.bio-input');
const sclBtnEdit = document.querySelector('.scl-btn-edit');
const sclBtnSave = document.querySelector('.scl-btn-save');
const sclBtnAdd = document.querySelector('.scl-btn-add');
const sclBtnRem = document.querySelector('.scl-btn-rem');
const sclBtnDel = document.querySelector('.scl-btn-del');
const othBtnEdit = document.querySelector('.oth-btn-edit');
const othBtnSave = document.querySelector('.oth-btn-save');
const othBtnAdd = document.querySelector('.oth-btn-add');
const othBtnRem = document.querySelector('.oth-btn-rem');
const othBtnDel = document.querySelector('.oth-btn-del');
const contentScl =document.querySelector('.dropdown-content-scl');
const contentOth =document.querySelector('.dropdown-content-oth');
const linkInputScl = document.querySelector('.scl-input');
const linkInputOth = document.querySelector('.oth-input');
const linksContainer = document.querySelector('.client-social-links');
const othLinksContainer = document.querySelector('.client-other-links');
const ps = document.createElement('span');
const scTypeInput = document.querySelector('.scl-input2');
const scTypeInput2 = document.querySelector('.oth-input3');
 bioedit = () =>{
  bioBtnEdit.style.display='none';
  bioBtnSave.style.display='block';
  bioInput.style.display='block';
  bioBox.style.display='none';
  bioInput.innerText=bioBox.innerText
};
biosave = () => {
  bioBox.innerText=bioInput.value;
  bioBox.style.display='flex';
  bioInput.style.display='none';
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
}
sclsave = () =>{
  const newA = document.createElement('a');
  if(sclBtnSave.name==='linkedin'){
    newA.innerHTML=`<i class="fab fa-${sclBtnSave.name}"></i>`
  }
  else{
    newA.innerHTML=`<i class="fab fa-${sclBtnSave.name}-square"></i>`
  }
  newA.href=`${linkInputScl.value}`;
  newA.target='_blank';
  linksContainer.appendChild(newA);
  linkInputScl.style.display='none';
  sclBtnSave.style.display='none';
  sclBtnEdit.style.display='block';
}
sclrem = () => {
  ps.style.display='block';
  ps.innerText='Enter a number which indicates the order of the icon to delete. ex: to delete the first icon type 1 then hit Delete.';
  ps.style.opacity='0.6';
  linksContainer.appendChild(ps);
  linkInputScl.style.display='block';
  sclBtnAdd.style.display='none';
  sclBtnRem.style.display='none';
  sclBtnDel.style.display='block';
}
scldel = () => {
    const links = linksContainer.querySelectorAll('a');
    scTypeInput.value = links[linkInputScl.value - 1].outerHTML;
    linksContainer.removeChild(links[linkInputScl.value - 1]);
  sclBtnDel.style.display='none';
  linkInputScl.style.display='none';
  sclBtnEdit.style.display='block';
    ps.style.display = 'none';
}


othedit = () => {
  othBtnEdit.style.display='none';
  othBtnSave.style.display='none';
  othBtnAdd.style.display='block';
  othBtnRem.style.display='block';
}
othadd = () =>{
  contentOth.style.display='flex';
  othBtnAdd.style.display='none';
  othBtnRem.style.display='none';
  othBtnSave.style.display='none';
}
othsave = () =>{
  const newD = document.createElement('div');
  const newI = document.createElement('i');
  const newA = document.createElement('a');
  newD.classList.add('oth');
  newI.classList.add(`fas`);
  newI.classList.add( `fa-${othBtnSave.name}`)
  if(othBtnSave.name==='envelope'){
    newA.href=`mailto:${linkInputOth.value}`;
  }
  else if(othBtnSave.name==='phone'){
    newA.href=`tel:${linkInputOth.value}`;
  }
  else{
    newA.href=`${linkInputOth.value}`;
  }
    linkInputOth.value=`${linkInputOth.value}`
  newA.target='_blank';
  othLinksContainer.appendChild(newD);
  newD.appendChild(newI);
  newD.appendChild(newA);
  linkInputOth.style.display='none';
  othBtnSave.style.display='none';
  othBtnEdit.style.display='block';
}
othrem = () => {
  ps.style.display='block';
  ps.innerText='Enter a number which indicates the order of the icon to delete. ex: to delete the first icon type 1 then hit Delete.';
  ps.style.opacity='0.6';
  othLinksContainer.appendChild(ps);
  linkInputOth.style.display='block';
  othBtnAdd.style.display='none';
  othBtnRem.style.display='none';
  othBtnDel.style.display='block';
}
othdel = () => {
  const links = othLinksContainer.querySelectorAll('div');
    othLinksContainer.removeChild(links[linkInputOth.value - 1]);
    scTypeInput2.value = links[linkInputOth.value - 1].outerHTML;
  othBtnDel.style.display='none';
  linkInputOth.style.display='none';
  othBtnEdit.style.display='block';
  ps.style.display='none';
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




em = () => {
  othBtnSave.name='envelope'
  linkInputOth.style.display='flex';
  contentOth.style.display='none';
    othBtnSave.style.display = 'block';
    scTypeInput2.value = 'envelope';
}
wb = () => {
  othBtnSave.name='website'
  linkInputOth.style.display='flex';
  contentOth.style.display='none';
    othBtnSave.style.display = 'block';
    scTypeInput2.value = 'globe';

}
loc = () => {
  othBtnSave.name='map-marker-alt'
  linkInputOth.style.display='flex';
  contentOth.style.display='none';
    othBtnSave.style.display = 'block';
    scTypeInput2.value = 'map-marker-alt';

}
cl = () => {
  othBtnSave.name='phone'
  linkInputOth.style.display='flex';
  contentOth.style.display='none';
    othBtnSave.style.display = 'block';
    scTypeInput2.value = 'phone-alt';

}
pdf = () => {
  othBtnSave.name='file-pdf'
  linkInputOth.style.display='flex';
  contentOth.style.display='none';
    othBtnSave.style.display = 'block';
    scTypeInput2.value = 'file-pdf';

}
