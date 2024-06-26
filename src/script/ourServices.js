document.addEventListener('DOMContentLoaded', () => {
    const buttonNext = document.querySelector('#services-next');
    const buttonPrev = document.querySelector('#services-prev');    
    const cards = document.querySelectorAll('.card');
    const section = document.querySelector('.our-services__content');

    const cardWidth = cards[0].offsetWidth;
    const widthToScroll = cardWidth + 16;

    let index = 0;

    const updateVisibleCards = () => {
        const sectionWidth = section.offsetWidth;
        const visibleCards = Math.floor(sectionWidth / widthToScroll);
        return visibleCards;
    };

    buttonNext.addEventListener('click', () => {
        const visibleCards = updateVisibleCards();
        if (index < cards.length - visibleCards) {
            index++;
            cards.forEach(card => {
                gsap.to(card, {
                    x: -widthToScroll * index,
                    duration: 0.5
                });
            });
        }
    });

    buttonPrev.addEventListener('click', () => {
        if (index > 0) {
            index--;
            cards.forEach(card => {
                gsap.to(card, {
                    x: -widthToScroll * index,
                    duration: 0.5
                });
            });
        }
    });

    // Optionally, update the layout on window resize to handle responsiveness
    window.addEventListener('resize', () => {
        const visibleCards = updateVisibleCards();
        if (index >= cards.length - visibleCards) {
            index = cards.length - visibleCards;
            if (index < 0) index = 0;
            cards.forEach(card => {
                gsap.to(card, {
                    x: -widthToScroll * index,
                    duration: 0.5
                });
            });
        }
    });
});