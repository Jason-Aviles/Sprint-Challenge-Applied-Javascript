class Carousel {








}
let carousel = document.querySelector('.carousel');
let rightBtn = carousel.querySelector('.right-button');
let leftBtn = carousel.querySelector('.left-button');
let img = document.querySelectorAll('img')
count=0;
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
function reset() {
   img.forEach(
   (x)=>{
       x.style.display='none'
   }
   )
}

function startslide() {
    reset();
    img[0].style.display='flex'
}

function slideleft() {
    reset();
    img[count -1].style.display ='flex';
    count--;
}

function slideright(){
    img[count +1].style.display ='flex';
    count++;
}


rightBtn.addEventListener('click',()=>{
    if(count === img.length -1){
        count = -1
    }slideright()
})


leftBtn.addEventListener('click',()=>{
    if(count === 0){
        count = img.length 
    }slideleft()
})

startslide()