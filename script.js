$(document).ready(function() {
    // Evento de submissão do formulário
    $('#task-form').on('submit', function(e) {
        e.preventDefault();

        // Obter o valor do campo de entrada
        const taskName = $('#task-name').val();

        // Verificar se o campo não está vazio
        if (taskName.trim() !== '') {
            // Adicionar um novo item à lista de tarefas
            $('#task-list').append(`<li>${taskName}</li>`);

            // Limpar o campo de entrada
            $('#task-name').val('');
        }
    });

    // Evento de clique nos itens da lista
    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
