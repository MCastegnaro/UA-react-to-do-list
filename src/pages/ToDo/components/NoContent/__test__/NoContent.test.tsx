import { NoContent } from "..";
import { screen, render } from "@testing-library/react";
import { beforeAll, describe, expect, it } from "vitest";

import { BrowserRouter } from "react-router-dom";

describe("<NoContent />", () => {
  beforeAll(() => {
    render(<NoContent />, { wrapper: BrowserRouter })
  })
  it('A tag img do NoContent deve estar sendo lida pelo browser', () => {
    const img = screen.getByRole('img', { name: 'ícone de clipboard' });
    expect(img.getAttribute("alt")).toBe('ícone de clipboard');
  })

  it('A imagem do NoContent deve ser renderizada buscando o caminho da mesma pela tag img', () => {
    const img = screen.getByRole('img', { name: 'ícone de clipboard' });
    expect(img.getAttribute("src")).toBe('/src/assets/clipboard.svg');
  })

  it('Deve conter um título na tag h1 "To do list"', async () => {
    const p = await screen.queryByText("Crie tarefas e organize seus itens a fazer");
    expect(p).not.toBeNull();
  })

  it('Deve conter um título na tag h1 "To do list"', async () => {
    const strong = await screen.queryByText("Você ainda não tem tarefas cadastradas");
    expect(strong).not.toBeNull();
  })
})