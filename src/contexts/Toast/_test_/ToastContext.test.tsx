import { describe, expect, it } from "vitest";
import { ToastProvider } from "..";
import { render, screen } from "@testing-library/react";
import { useToast } from "../../../hooks/useToast";
import { useEffect } from "react";

describe("<ToastContext>",() => {
    describe("ToastProvider", () => {
        it("Deve renderizar um children quando passado por parâmetro", () => {
            const {debug} = render(<ToastProvider>
                <h1>Testando o toast Provider</h1>
            </ToastProvider>);
            debug();

            const childElement = screen.getByText(/Testando o toast Provider/i);
            expect(childElement).not.toBeNull();
        })

        it("Deve exibir um toast quando a funcao 'showToast' for chamada", async() => {
            const TestComponent = () => {
                const {showToast} = useToast();

                useEffect(() => {
                    showToast({
                        message: 'Testando a exibiçao do toast',
                        type: 'success'
                    })
                },[])
                return null;
            }
            const {debug} = render(<ToastProvider>
                <TestComponent />
            </ToastProvider>);
            debug();
            const toastElement = await screen.findByText(/Testando a exibiçao do toast/i);
            expect(toastElement).not.toBeNull();
        })
    })
})