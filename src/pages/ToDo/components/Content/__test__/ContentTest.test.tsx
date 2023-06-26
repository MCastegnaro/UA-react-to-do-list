import { render, screen } from "@testing-library/react";
import { Content } from "..";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";

describe("<Content/>", () => {
    beforeAll(() => {
        render(<Content />, { wrapper: BrowserRouter })
    })

    it("Deve renderizar o Content corretamente", () => {
        const content = screen.getByTestId("content");
        expect(content).not.toBeNull();
    });

    it('Deve conter o texto "Criar"', async () => {
        const text = await screen.queryByText("Criar");
        expect(text).not.toBeNull();
    })

    it("Deve exibir o input em Content corretamente", () => {
        const input = screen.getByTestId("input");
        expect(input).not.toBeNull();
    });

    it("Deve exibir o botão em Content corretamente", () => {
        const button = screen.getByTestId("button");
        expect(button).not.toBeNull();
    });

    it('Deve conter o texto "Tarefas Criadas na página"', async () => {
        const text = await screen.queryByText("Tarefas Criadas");
        expect(text).not.toBeNull();
    })

    it('Deve conter o texto "Concluidas" na página', async () => {
        const text = await screen.queryByText("Concluídas");
        expect(text).not.toBeNull();
    })
});