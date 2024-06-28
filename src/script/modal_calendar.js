document.addEventListener('DOMContentLoaded', () => {

    $(document).ready(function(){

        var hoje = new Date();
        var amanha = new Date(hoje);
        amanha.setDate(hoje.getDate() + 1);

        // Opções do Datepicker
        var options = {
            language: 'en-US', // Idioma
            format: 'dd/mm/yyyy', // Formato da data
            autoclose: false, // Fecha ao selecionar
            todayHighlight: true, // Destaca a data atual
            startDate: amanha
        };
    
        // Inicialização do Datepicker no elemento desejado
        $('#calendarContainer').datepicker(options);
    });

})
