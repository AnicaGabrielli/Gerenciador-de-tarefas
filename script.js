document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;

    if (taskText) {
        const li = document.createElement('li');

        li.textContent = taskText;

        // Botão para marcar como concluído
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Concluir';
        completeButton.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        // Botão para remover a tarefa
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Remover';
        deleteButton.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        
        document.getElementById('taskList').appendChild(li);
        taskInput.value = '';
    }
});