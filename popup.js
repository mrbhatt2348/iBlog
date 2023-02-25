const openbtn = document.querySelector(`.show-popup`);
const closebtn = document.querySelector(`.hide-popup`);
const popup = document.querySelector(`.popup-container`);

openbtn.addEventListener('click', ()=>{
    popup.classList.add('show');
});

closebtn.addEventListener('click', ()=>{
    popup.classList.remove('show');
});