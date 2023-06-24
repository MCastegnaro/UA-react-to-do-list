import { renderHook } from "@testing-library/react";
import { useToast } from "..";
import { describe, expect, it } from "vitest";
import { ToastProvider } from "../../../contexts/Toast";

describe("useToast", () => {
    it("Não deve funcionar o usetoast quando usado fora de ToastProvider", () => {
        expect(() => {
            renderHook(() => useToast());
        }).toThrowError;
    });

    it("Deve retornar o contexto corretamente quando usado dentro de um ToastProvider", () => {
        const wrapper: React.FC<React.PropsWithChildren<{}>> = ({ children }) => (
            <ToastProvider>{children}</ToastProvider>
        );

        const { result } = renderHook(() => useToast(), { wrapper });

        expect(result.current).toBeDefined();
        expect(result.current.showToast).toBeInstanceOf(Function);
    });
});
