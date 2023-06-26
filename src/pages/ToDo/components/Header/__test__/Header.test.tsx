import { Header } from "..";
import { screen, render } from "@testing-library/react";
import { beforeAll, describe, expect, it } from "vitest";

import { BrowserRouter } from "react-router-dom";

describe("<Header />", () => {
  beforeAll(() => {
    render(<Header />, { wrapper: BrowserRouter })
  })
  it('A tag img deve estar sendo lida pelo browser', () => {
    const img = screen.getByRole('img', { name: 'Logo principal do sistema' });
    expect(img.getAttribute("alt")).toBe('Logo principal do sistema');
  })

  it('A imagem deve ser renderizada buscando o caminho da mesma pela tag img', () => {
    const img = screen.getByRole('img', { name: 'Logo principal do sistema' });
    expect(img.getAttribute("src")).toBe('/src/assets/logo.svg');
  })


  it("Deve renderizar o header corretamente", () => {
    const header = screen.getByTestId("header");
    expect(header).not.toBeNull();
  })
})