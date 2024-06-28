document.addEventListener('DOMContentLoaded', () => {
    var dropdown = document.querySelector('#select-time');
    var horaSelecionada;

    dropdown.addEventListener('change', function() {
        horaSelecionada = dropdown.value;
    })
})