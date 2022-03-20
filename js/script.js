let ham = document.getElementById('ham');
let drop = document.getElementById('dropdown')
let main = document.getElementById('main-tag')
let head = document.getElementById('head')
let bigX = document.getElementById('bigX')

ham.addEventListener('click',function(){
    if(ham.getAttribute('src') ==='imgs/icons/icon-hamburger.svg'){
        drop.classList.add('animate__slideInRight')
        drop.classList.remove('animate__fadeOut')
        main.style.display='none'
        head.style.display='none'
       drop.style.display ='flex' 
        
     
    } 
    });
bigX.addEventListener('click',function(){
 if(bigX.getAttribute('src')==='imgs/icons/icon-close.svg'){
        drop.style.display='flex'
        head.style.display='flex'
        main.style.display='grid'
        drop.style.display ='none'
}
});