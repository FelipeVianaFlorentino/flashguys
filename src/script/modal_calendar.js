document.addEventListener('DOMContentLoaded', () => {
    $(document).ready(function(){
        var hoje = new Date();
        var amanha = new Date(hoje);
        amanha.setDate(hoje.getDate() + 1);

        // Opções do Datepicker
        var options = {
            language: 'en-US', // Idioma
            format: 'dd/mm/yyyy', // Formato da data para o Datepicker
            autoclose: false, // Fecha ao selecionar
            todayHighlight: true, // Destaca a data atual
            startDate: amanha
        };
    
        // Inicialização do Datepicker no elemento desejado
        $('#calendarContainer').datepicker(options);

        var dataSelecionada;

        $('#btnConfirmar').click(function() {
            // Captura a data formatada do Datepicker
            dataSelecionada = $('#calendarContainer').datepicker('getFormattedDate');
            
            // Formata a data para "June 30, 2024"
            var dataFormatada = formatarDataParaTexto(dataSelecionada);
            
            // Atualiza o texto do elemento HTML com a data selecionada
            document.getElementById('data-selecionada').textContent = dataFormatada;
            
            // Esconde o modal
            document.querySelector('.modal-calendar-wrapper').style.display = 'none';
        });
    });

    // Função para formatar a data para "June 30, 2024"
    function formatarDataParaTexto(dataString) {
        // Separa o dia, mês e ano da data formatada
        var partesData = dataString.split('/');
        var dia = partesData[0];
        var mes = partesData[1];
        var ano = partesData[2];
        
        // Converte para o formato "June 30, 2024"
        var meses = [
            "January", "February", "March", "April", "May", "June", 
            "July", "August", "September", "October", "November", "December"
        ];
        var mesNome = meses[parseInt(mes) - 1]; // Subtrai 1 pois os meses são zero-indexados
        
        return mesNome + " " + dia + ", " + ano;
    }
});
