import { screen, render } from "@testing-library/react";
import { beforeAll, describe, expect, it } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { Content } from "..";

describe("<Content />", () => {
    beforeAll(() => {
        render(<Content />, { wrapper: BrowserRouter })
    })
    it("Deve renderizar a section corretamente", () => {
        const section = screen.getByTestId("content");
        expect(section).not.toBeNull();
    })

    it('A tag img do Content deve estar sendo lida pelo browser', () => {
        const img = screen.getByRole('img', { name: 'Ícone de mais' });
        expect(img.getAttribute("alt")).toBe('Ícone de mais');
    })

    it('A imagem do Content deve ser renderizada buscando o caminho da mesma pela tag img', () => {
        const img = screen.getByRole('img', { name: 'Ícone de mais' });
        expect(img.getAttribute("src")).toBe('/src/assets/plus.svg');
    })

    it('A imagem do Content deve ser renderizada buscando o caminho da mesma pela tag img', () => {
        const img = screen.getByPlaceholderText('Adicione uma nova tarefa');
        expect(img).not.toBeNull();
    })

    it('Deve conter o texto "Criar"', async () => {
        const text = await screen.queryByText("Criar");
        expect(text).not.toBeNull();
    })

    it('Deve conter o texto "Tarefas Criadas"', async () => {
        const text = await screen.queryByText("Tarefas Criadas");
        expect(text).not.toBeNull();
    })

    it('Deve conter o texto "Concluidas"', async () => {
        const text = await screen.queryByText("Concluídas");
        expect(text).not.toBeNull();
    })

    it('A tag img deve conter o texto de alt', () => {
        const altText = screen.getByAltText('Ícone de mais');
        expect(altText).not.toBeNull();
    })
})