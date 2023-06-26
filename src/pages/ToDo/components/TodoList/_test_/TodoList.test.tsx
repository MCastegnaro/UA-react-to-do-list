import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { TodoList } from ".."

describe("<TodoList>", () => {

    it("Deve renderizar o componente TodoList corretamente", () => {

        const onDelete = jest.fn()
        const onChangeCheckbox = jest.fn()

        render(
            <TodoList onDelete={onDelete} onChangeCheckbox={onChangeCheckbox} />
        )

        const section = screen.getByTestId("section-todo-list")
        expect(section).not.toBeNull()
    })
})