let ham = document.getElementById('ham');
let drop = document.getElementById('dropdown')


ham.addEventListener('click',function(){
    if(ham.getAttribute('src') ==='imgs/icon-close.svg'){
        ham.src = 'imgs/icon-hamburger.svg'
        drop.classList.remove('animate__fadeIn')
        drop.classList.add('animate__fadeOut')
        // drop.style.display='none'
        
        
     
    } else{
        ham.src = 'imgs/icons/icon-close.svg'
        drop.style.display='flex'
        drop.classList.add('animate__fadeIn')
        drop.classList.remove('animate__fadeOut')
    
        
    }
    });