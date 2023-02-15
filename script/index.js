const container = document.querySelector('.container')
const check = document.querySelector('.check-b')


check.addEventListener('click',()=>{
    container.classList.toggle('whiteWite')
    container.classList.toggle('blackWite')
})