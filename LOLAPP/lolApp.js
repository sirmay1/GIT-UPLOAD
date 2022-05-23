const inTears = document.querySelector('.begin');
const lolFace = document.querySelector('.end');

inTears.addEventListener('click', () => {
 if (lolFace.classList.contains('end')) {
     lolFace.classList.add('laugh');
     inTears.classList.remove('laugh');
 }
});

lolFace.addEventListener('click', () => {
    if (inTears.classList.contains('begin')) {
        inTears.classList.add('laugh');
        lolFace.classList.remove('laugh');
    }
});