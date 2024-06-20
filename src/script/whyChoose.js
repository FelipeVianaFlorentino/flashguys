document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.why-choose__cards__item');

    let currentCardIndex = 0;
    let autoSlideInterval;

    function openCard(index) {
        cards.forEach((card, i) => {
            const whyIcon = card.querySelector('.why-choose__cards__item span')

            if (i === index) {
                card.classList.add('active');
                whyIcon.textContent = 'remove'
            } else {
                card.classList.remove('active');
                whyIcon.textContent = 'add'
            }
        });
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            currentCardIndex = (currentCardIndex + 1) % cards.length;
            openCard(currentCardIndex);
        }, 7500);
    }

    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            openCard(index);
            clearInterval(autoSlideInterval);
            startAutoSlide();
        });
    });

    openCard(currentCardIndex);
    startAutoSlide();
});