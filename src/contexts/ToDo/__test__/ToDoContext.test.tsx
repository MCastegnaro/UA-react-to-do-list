import { describe, expect, it } from "vitest";
import ToDoContext, { ToDoContextProvider } from "..";
import { Content } from "../../../pages/ToDo/components/Content";
import React from 'react';
import { render, screen } from '@testing-library/react';

describe("<ToDoContext>", () => {
    describe("ToDoProvider", () => {
        it("renderiza um children pssando pelo paramentro", () => {
            render(<ToDoContextProvider><h1>Test ToDoProvider</h1></ToDoContextProvider>)
            const childElement = screen.getByText(/Test ToDoProvider/i);
            expect(childElement).not.toBeNull();
        });
       it('deve inicializar com o estado padrão da lista de tarefas', () => {
            render(
              <ToDoContextProvider>
                <Content />
              </ToDoContextProvider>
            );
            const defaultValueElement = screen.getByText("Tarefas Criadas");
            expect(defaultValueElement.textContent).not.toBeNull();
        });
        const TaskList = () => {
          const { taskListState } = React.useContext(ToDoContext);
          return (
            <ul>
              {taskListState.map(task => (
                <li key={task.id}>{task.description}</li>
              ))}
            </ul>
          );
        };
        
          it('fornece o valor do contexto para componentes filhos', () => {
            const tasks = [
              { id: '1', description: 'Task 1', isDone: false },
              { id: '2', description: 'Task 2', isDone: true },
            ];
            render(
              <ToDoContextProvider>
                <ToDoContext.Provider value={{ taskListState: tasks, setTaskListState: () => {} }}>
                  <TaskList />
                </ToDoContext.Provider>
              </ToDoContextProvider>
            );
            const taskElements = screen.getAllByRole('listitem');
            expect(taskElements).toHaveLength(2);
            expect(taskElements[0].textContent).toBe('Task 1');
            expect(taskElements[1].textContent).toBe('Task 2');
          });
          
    });
});
          
          
          