import { renderHook } from "@testing-library/react";
import useToDoContext from "..";
import { describe, expect, it } from "vitest";
import { ToDoContextProvider } from "../../../contexts/ToDo";

describe("useToDoContext", () => {
    it("Não deve funcionar o useToDoContext quando usado fora do ToDoContextProvider", () => {
        expect(() => {
            renderHook(() => useToDoContext());
        }).toThrowError;
    });

    it("Deve retornar o contexto corretamente quando usado dentro do ToDoContextProvider", () => {
        const wrapper: React.FC<React.PropsWithChildren<{}>> = ({ children }) => (
            <ToDoContextProvider>{children}</ToDoContextProvider>
        );

        const { result } = renderHook(() => useToDoContext(), { wrapper });

        expect(result.current).toBeDefined();
    });
});
