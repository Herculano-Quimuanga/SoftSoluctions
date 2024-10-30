// events of links
document.querySelector('.logoBrand').addEventListener('click', () =>{
    window.location = 'index.html';
})

/*  Menu Toggle */
const navigation = document.querySelector('.navegation');
const MenuToggle = document.querySelector('.menuToggle');

MenuToggle.addEventListener('click', () =>{
    MenuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
})

// tela de abertura  
const loanding = document.querySelector('.loanding-Screen');
const body = document.getElementsByTagName('body');

setTimeout( () =>{
    loanding.style.display = 'none';
    body.classList.toggle = ('hidden');
}, 6000)