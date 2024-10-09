`use strict`
const btn = document.querySelector('button')
const zar1 = [document.querySelector('.unu1'),document.querySelector('.doi1'),
    document.querySelector('.trei1'),document.querySelector('.patru1'),
    document.querySelector('.cinci1'),
    document.querySelector('.sase1')]

    const zar2 = [document.querySelector('.unu2'),document.querySelector('.doi2'),
        document.querySelector('.trei2'),document.querySelector('.patru2'),
        document.querySelector('.cinci2'),
        document.querySelector('.sase2')]
 const text = document.querySelector('main>h1')       
btn.addEventListener('click', ()=>{
 
 zar1.forEach((element) => {
    element.style.display = `none`
 });
 zar2.forEach((element) => {
    element.style.display = `none`
 });
 let randomNumber1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
 let randomNumber2 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
   zar1[randomNumber1-1].style.display = `flex`
   zar2[randomNumber2-1].style.display = `flex`
  if(randomNumber1>randomNumber2){
    text.textContent = 'Jucatorul 1 a castigat'
  }else if(randomNumber1 === randomNumber2){
     text.textContent = 'Egalitate'
  }else{text.textContent = `Jucatorul 2 a castigat`}




})        


