import { describe, it } from "vitest";
import ToDoContext, { ToDoContextProps, ToDoContextProvider } from "..";
import { useContext } from "react";
import { render } from "@testing-library/react";

type Task = {
    id: string;
    description: string;
    isDone: boolean;
};

describe("<ToastProvider />", () => {
    it("Deve fornecer o contexto adequado aos child.", () => {
        let contexto: ToDoContextProps | undefined;

        const ChildComponent = () => {
            const context = useContext<ToDoContextProps>(ToDoContext);
            contexto = context;

            return null;
        };

        render(
            <ToDoContextProvider>
                <ChildComponent />
            </ToDoContextProvider>
        );
    });
});