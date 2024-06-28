document.addEventListener('DOMContentLoaded', () => {
    const headerHero = document.querySelector('header');
    const hero = document.querySelector('.hero');

    const heroMargin = headerHero.offsetHeight;

    hero.style.marginTop = `${heroMargin}px`;
});

document.querySelector('.input.day').addEventListener('click', () => {
    const modalCalendar = document.querySelector('.modal-calendar-wrapper');
    modalCalendar.style.display = ('flex');
})
