document.addEventListener('DOMContentLoaded', () => {

    const promotions = document.querySelectorAll('.promotion');

    const promoHovers = document.querySelectorAll('.hover');

    promotions.forEach((promotion, index) => {

        promotion.addEventListener('mouseover', () => {
            promoHovers[index].style.height = '100%';
            promoHovers[index].style.transition = 'height 0.2s ease';
        });

        promotion.addEventListener('mouseout', () => {
            promoHovers[index].style.height = '0';
            promoHovers[index].style.transition = 'height 0.2s ease';
        });

    });


});