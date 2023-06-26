import { describe, it, expect } from "vitest";
import { createNewTask, removeTask } from "..";

describe('Todo Helpers', () => {
  it('A função "removeTask" deve remover a tarefa da lista', () => {
    const taskList = [
      { id: '01', description: 'Teste 01', isDone: false },
      { id: '02', description: 'Teste 02', isDone: true },
      { id: '03', description: 'Teste 03', isDone: false }
    ];
    const updatedTaskList = removeTask(taskList, '02');
    expect(updatedTaskList).toEqual([
      { id: '01', description: 'Teste 01', isDone: false },
      { id: '03', description: 'Teste 03', isDone: false }
    ]);
  });


  it('A função  deve criar e adicionar uma tarefa na lista', () => {
    const newTask = createNewTask('Nova Tarefa');
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