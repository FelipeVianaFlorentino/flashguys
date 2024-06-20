document.addEventListener('DOMContentLoaded', () => {
    fetch('https://flashguyscleaning.com/version-test/api/1.1/wf/depoiments')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const reviewsContainer = document.getElementById('reviews-container');

            // Verifique se 'response' está presente e contém 'reviews'
            if (data.response && Array.isArray(data.response.reviews)) {
                const reviews = data.response.reviews;

                reviews.forEach(review => {
                    const reviewItem = document.createElement('div');
                    reviewItem.classList.add('review-item');

                    const itemHead = document.createElement('div');
                    itemHead.classList.add('item-head');
                    itemHead.textContent = review.name; // Nome do usuário

                    const itemText = document.createElement('div');
                    itemText.classList.add('item-text');
                    itemText.textContent = review.text; // Texto do review

                    // Adiciona elementos ao review item
                    reviewItem.appendChild(itemHead);
                    reviewItem.appendChild(itemText);

                    // Adiciona o review item ao contêiner de reviews
                    reviewsContainer.appendChild(reviewItem);
                });
            } else {
                console.error('A resposta da API não contém a chave "response.reviews" ou não é um array');
            }

            // Inicializa o carrossel
            initCarousel();
        })
        .catch(error => {
            console.error('Erro ao recuperar os dados:', error);
        });

    function initCarousel() {
        const arrowBack = document.querySelector('.arrow-back');
        const arrowForward = document.querySelector('.arrow-forward');
        const reviewsContainer = document.querySelector('.reviews');
        const reviewItems = document.querySelectorAll('.review-item');

        let currentPosition = 0;
        const step = 320; // Largura de deslocamento dos cards

        arrowForward.addEventListener('click', () => {
            currentPosition -= step;
            moveCarousel();
        });

        arrowBack.addEventListener('click', () => {
            currentPosition += step;
            moveCarousel();
        });

        function moveCarousel() {
            // Largura total dos cards visíveis no contêiner
            const containerWidth = reviewsContainer.clientWidth;
            // Largura total dos cards
            const totalWidth = reviewItems.length * step;
            // Limite máximo de deslocamento para manter o último card à direita visível
            const maxPosition = Math.min(0, containerWidth - totalWidth);

            // Limita a posição do carrossel dentro dos limites
            currentPosition = Math.max(maxPosition, Math.min(0, currentPosition));

            // Move cada item individualmente
            reviewItems.forEach((item, index) => {
                item.style.transform = `translateX(${currentPosition}px)`;
            });

            // Desabilita ou habilita as setas baseado na posição atual
            arrowBack.disabled = currentPosition === 0;
            arrowForward.disabled = currentPosition === maxPosition;
        }

        // Executa uma vez para ajustar a posição inicial
        moveCarousel();
    }
});
