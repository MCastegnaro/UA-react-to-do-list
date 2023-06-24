import { describe, it, expect } from "vitest";
import { createNewTask, removeTask } from "..";

describe('Todo Helpers', () => {
  // Teste para verificar se a tarefa é removida corretamente
  it('A função "removeTask" deve remover a tarefa da lista', () => {
    // Cria uma lista de tarefas fictícia
    const taskList = [
        {id: '01', description: 'Teste 01', isDone: false},
        {id: '02', description: 'Teste 02', isDone: true},
        {id: '03', description: 'Teste 03', isDone: false}
    ];
    // Chama a função removeTask passando o id da tarefa a ser removida
    const updatedTaskList = removeTask(taskList, '02');
    // Verifica se a tarefa foi removida corretamente
    expect(updatedTaskList).toEqual([
        {id: '01', description: 'Teste 01', isDone: false},
        {id: '03', description: 'Teste 03', isDone: false}
    ]);
  });


    it('A função "createNewTask" deve criar e adicionar uma tarefa na lista', () => {
    // Cria uma lista de tarefas fictícia
        const newTask = createNewTask('Nova Tarefa');

        // Verifica se a tarefa foi criada com os valores esperados
        expect(newTask).not.toBeNull();

        console.log(newTask)
    });

});

import { toggleTaskStatus } from '../index';

describe('toggleTaskStatus', () => {
  it('Deve trocar o estado da task', () => {

    const taskList = [
      { id: '1', description: 'Task 1', isDone: false },
      { id: '2', description: 'Task 2', isDone: true },
      { id: '3', description: 'Task 3', isDone: false },
    ];
    const taskId = '2';

    const updatedTaskList = toggleTaskStatus(taskList, taskId);

    expect(updatedTaskList).toEqual([
      { id: '1', description: 'Task 1', isDone: false },
      { id: '2', description: 'Task 2', isDone: false },
      { id: '3', description: 'Task 3', isDone: false },
    ]);
  });

  it('Não deve alterar o estado da task se ela não for encontrada', () => {
    const taskList = [
      { id: '1', description: 'Task 1', isDone: false },
      { id: '2', description: 'Task 2', isDone: true },
    ];
    const taskId = '3'; 

    const updatedTaskList = toggleTaskStatus(taskList, taskId);

    expect(updatedTaskList).toEqual(taskList); 
  });
});

