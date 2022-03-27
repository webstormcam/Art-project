let ham = document.getElementById('ham');
let drop = document.getElementById('dropdown')
let main = document.getElementById('main-tag')
let head = document.getElementById('head')
let bigX = document.getElementById('bigX')

ham.addEventListener('click',function(){
    if(ham.getAttribute('src') ==='imgs/icons/icon-hamburger.svg'){
        drop.classList.add('animate__slideInRight')
        drop.classList.remove('animate__fadeOut')
        head.style.display='none'
       drop.style.display ='flex' 
       console.log('hello')
        
     
    } 
    });
bigX.addEventListener('click',function(){
 if(bigX.getAttribute('src')==='imgs/icons/icon-close.svg'){
        drop.style.display='flex'
        head.style.display='flex'
        
        drop.style.display ='none'
}
});

// create references to the modal...
var modal = document.getElementById('myModal');
// to all images -- note I'm using a class!
var images = document.getElementsByClassName('gallery__img');
// the image in the modal
var modalImg = document.getElementById("img01");
// and the caption in the modal
var captionText = document.getElementById("caption");

// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach our click listener for this image.
  img.onclick = function(evt) {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}