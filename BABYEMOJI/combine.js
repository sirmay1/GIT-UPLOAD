const eggCracked = document.querySelector('.start');
const babyChicken = document.querySelector('.end');

eggCracked.addEventListener('click', () => {
    if (babyChicken.classList.contains('end')) {
        babyChicken.classList.add('run');
        eggCracked.classList.remove('run');
    }
});

babyChicken.addEventListener('click', () => {
    if (eggCracked.classList.contains('start')) {
        eggCracked.classList.add('run');
        babyChicken.classList.remove('run');
    }
});