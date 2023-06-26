import { renderHook } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { useToast } from ".."
import { ToastProvider } from "../../../contexts/Toast"

describe("useToast", () => {
    it("Não deverá funcionar o useToast quando for usado fora de ToastProvider", () => {
        expect(() => {
            renderHook(() => useToast())
        }).toThrowError
    })

    it("Deverá retornar o contexto quando usado em ToastProvider", () => {
        const wrapper: React.FC<React.PropsWithChildren<{}>> = ({ children }) => (
            <ToastProvider>{children}</ToastProvider>
        )

        const { result } = renderHook(() => useToast(), { wrapper })

        expect(result.current).toBeDefined()
        expect(result.current.showToast).toBeInstanceOf(Function)
    })
})