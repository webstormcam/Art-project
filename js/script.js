let ham = document.getElementById('ham');
let drop = document.getElementById('dropdown')


ham.addEventListener('click',function(){
    if(ham.getAttribute('src') ==='imgs/icons/icon-close.svg'){
        ham.src = 'imgs/icons/icon-hamburger.svg'
        drop.classList.remove('animate__slideInRight')
        drop.classList.add('animate__fadeOut')
        // drop.style.display='none'
        
        
     
    } else{
        ham.src = 'imgs/icons/icon-close.svg'
        drop.style.display='flex'
        drop.classList.add('animate__slideInRight')
        drop.classList.remove('animate__fadeOut')
    
        
    }
    });