const emoUp = document.querySelector('.up');
const emoDown = document.querySelector('.down');

emoUp.addEventListener('click', () => {
   if (emoDown.classList.contains('down')) {
       emoDown.classList.add('run');
       emoUp.classList.remove('run');
   } 
});
emoDown.addEventListener('click', () => {
    if (emoUp.classList.contains('up')) {
        emoUp.classList.add('run');
        emoDown.classList.remove('run');
    }
});