document.addEventListener('DOMContentLoaded', () => {
    const faqCards = document.querySelectorAll('.faq__content-card');
    const faqRespostas = document.querySelectorAll('.resposta');
    const sinais = document.querySelectorAll('.faq__content-card > .faq-expand > span');
    
    faqRespostas[0].classList.add('resposta-active');
    faqCards[0].classList.add('card-active');
    sinais[0].textContent = 'remove';

    faqCards.forEach((card, index) => {
        card.addEventListener('click', () => {
            if (faqRespostas[index].classList.contains('resposta-active')) {
                faqRespostas[index].classList.remove('resposta-active');
                card.classList.remove('card-active');
                sinais[index].textContent = 'add';  // Alterar texto para 'add' quando o item é fechado
            } else {
                faqRespostas.forEach(resposta => {
                    resposta.classList.remove('resposta-active');
                });
                faqCards.forEach((card) => {
                    card.classList.remove('card-active');
                });
                sinais.forEach((sinal) => {
                    sinal.textContent = 'add';  // Resetar texto para 'add' em todos os elementos
                });
                
                faqRespostas[index].classList.add('resposta-active');
                card.classList.add('card-active');
                sinais[index].textContent = 'remove';  // Alterar texto para 'remove' no elemento ativo
            }
        });
    });
});
