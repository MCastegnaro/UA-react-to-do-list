import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ToDoContext, { ToDoContextProps, ToDoContextProvider } from "..";
import React, { useContext } from "react";

export type Task = {
    id: string;
    description: string;
    isDone: boolean;
};

describe("ToastProvider", () => {
    it("renderizar um children quando passado por parâmetro", () => {
        render(<ToDoContextProvider>
            <h1>Testando o ToDo Provider</h1>
        </ToDoContextProvider>)

        const childElement = screen.getByText(/Testando o ToDo Provider/i);
        expect(childElement).not.toBeNull();
    })

    it("fornecer o contexto para os componentes filhos", () => {
        let contextValue: ToDoContextProps | undefined;

        const ChildComponent = () => {
            const context = React.useContext<ToDoContextProps>(ToDoContext);
            contextValue = context;
            return null;
        };

        render(
            <ToDoContextProvider>
                <ChildComponent />
            </ToDoContextProvider>
        );

        expect(contextValue).toBeDefined();
        expect(contextValue?.taskListState).toBeDefined();
        expect(contextValue?.setTaskListState).toBeDefined();
    });

    it("atualizar o estado do contexto ", () => {
        const ChildComponent = () => {
            const { taskListState, setTaskListState } = React.useContext<ToDoContextProps>(ToDoContext);

            React.useEffect(() => {
                setTaskListState([
                    { id: "1", description: "Task 1", isDone: false },
                    { id: "2", description: "Task 2", isDone: true }
                ]);
            }, [setTaskListState]);

            return (
                <>
                    {taskListState.map((task) => (
                        <div key={task.id}>{task.description}</div>
                    ))}
                </>
            );
        };

        render(
            <ToDoContextProvider>
                <ChildComponent />
            </ToDoContextProvider>
        );

        const taskElement1 = screen.getByText(/Task 1/i);
        const taskElement2 = screen.getByText(/Task 2/i);

        expect(taskElement1).toBeDefined();
        expect(taskElement2).toBeDefined();
    });

    it("Deve atribuir os valores padrão corretamente", () => {
        const TestComponent = () => {
            const { taskListState, setTaskListState } = useContext<ToDoContextProps>(ToDoContext);

            return (
                <>
                    <div data-testid="task-list">{JSON.stringify(taskListState)}</div>
                    <div data-testid="set-task-list">{typeof setTaskListState}</div>
                </>
            );
        };

        render(
            <ToDoContextProvider>
                <TestComponent />
            </ToDoContextProvider>
        );

        const taskListElement = screen.getByTestId("task-list");
        const setTaskListElement = screen.getByTestId("set-task-list");

        expect(taskListElement.textContent).toEqual("[]");
        expect(setTaskListElement.textContent).toEqual("function");
    });

})