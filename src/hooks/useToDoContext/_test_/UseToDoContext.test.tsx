import { renderHook } from "@testing-library/react"
import useToDoContext from ".."
import { describe, expect, it } from "vitest"
import { ToDoContextProvider } from "../../../contexts/ToDo"

describe("useToDoContext", () => {
    it("Não deverá funcionar o useToDoContext quando for usado fora de ToDoContextProvider", () => {
        expect(() => {
            renderHook(() => useToDoContext())
        }).toThrowError
    })

    it("Deverá retornar o contexto quando usado em ToDoContextProvider", () => {
        const wrapper: React.FC<React.PropsWithChildren<{}>> = ({ children }) => (
            <ToDoContextProvider>{children}</ToDoContextProvider>
        )

        const { result } = renderHook(() => useToDoContext(), { wrapper })

        expect(result.current).toBeDefined()
    })
})