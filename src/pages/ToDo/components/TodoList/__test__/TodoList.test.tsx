import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { TodoList } from "..";

describe("<TodoList />", () => {
    it("Deve renderizar o TodoList corretamente", () => {
        // render(
        //     <TodoList
        //         onDelete={(id: string) => {
        //             throw new Error("Função não implementada.");
        //         }}
        //         onChangeCheckbox={(id: string) => {
        //             throw new Error("Função não implementada.");
        //         }}
        //     />
        // );
        // const text = screen.getByTestId("text-todo-list");
        // expect(text).toBeInTheDocument();
    });
});