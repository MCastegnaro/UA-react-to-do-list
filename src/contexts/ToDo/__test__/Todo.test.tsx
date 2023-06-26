import { render, screen } from '@testing-library/react';
import ToDoContext, { ToDoContextProvider } from '..';
import { beforeAll, describe, expect, it } from "vitest";
import { BrowserRouter } from 'react-router-dom';
import { Task } from '../../../models/Task';


describe('<Todo />', () => {
  beforeAll(() => {
    render(
      <ToDoContextProvider>
        <ToDoContext.Consumer>
          {({ taskListState }) => (
            <>
              <p data-testid="task-count">{taskListState.length}</p>
              <ul>
                {taskListState.map((task) => (
                  <li key={task.id}>{task.description}</li>
                ))}
              </ul>
            </>
          )}
        </ToDoContext.Consumer>
      </ToDoContextProvider>,
      { wrapper: BrowserRouter }
    );
  });

  it("Deve renderizar o contador de tarefas corretamente", () => {
    const taskCount = screen.getByTestId("task-count");
    expect(taskCount).not.toBeNull();
  });

  it("Deve renderizar as tarefas corretamente", () => {
    const tasks: Task[] = [
      { id: '1', description: 'Tarefa 1', isDone: false },
      { id: '2', description: 'Tarefa 2', isDone: true },
      { id: '3', description: 'Tarefa 3', isDone: false }
    ];

    render(
      <ToDoContextProvider>
        <ToDoContext.Consumer>
          {({ setTaskListState }) => {
            setTaskListState(tasks);
            return null;
          }}
        </ToDoContext.Consumer>
      </ToDoContextProvider>,
      { wrapper: BrowserRouter }
    );

    tasks.forEach((task) => {
      const taskElement = screen.getByText(task.description);
      expect(taskElement).not.toBeNull();
    });
  });
});
