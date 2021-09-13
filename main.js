


const pagetitle = document.getElementById('pagetitleHead');
const coruLema = document.getElementById('coruLema');


window.addEventListener('scroll',()=>{
    let docStyles = document.documentElement.style;
    let Y = window.scrollY;
    docStyles.setProperty('--transformY',`-${Y}px`);
    let bounding = coruLema.getBoundingClientRect().top;
    if(Y>bounding) docStyles.setProperty('--opacity',`${Y/1000}`);
    else docStyles.setProperty('--opacity',`${1}`)

})

const menuOpener = document.getElementById('menu-opener__icon');
const menu__ul = document.getElementById('menu__ul');
const menu__ulItem = document.querySelectorAll('.menu__ul-item');
menuOpener.addEventListener('click',()=>{
    menuOpener.classList.toggle('opened');
    menu__ul.classList.toggle('opened');
    menu__ulItem.forEach(n=>n.classList.toggle('opened'))
})