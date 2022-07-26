const mario = document.querySelector('.mario ');
const pipee =document.querySelector('.pipe');

const pulo = () =>{
    mario.classList.add('pulo');

    setTimeout(() => {
    mario.classList.remove('pulo');

    }, 500);
}

 const loop = setInterval = (() => {

    const pipePosition = pipeoffsetLeft;
   
    
    if (pipePosition <= 120 ) {

        pipe.style.animation = 'none';
        
    }
}, 10);


document.addEventListener('keydown', pulo);