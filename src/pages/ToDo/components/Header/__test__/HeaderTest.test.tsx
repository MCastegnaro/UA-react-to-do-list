import { render, screen } from "@testing-library/react";
import { Header } from "..";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";

describe("<Header/>", () => {

  beforeAll(() => {
    render(<Header />, { wrapper: BrowserRouter })
  })

  it('O navegador deve estar acessando a tag img', () => {
    const img = screen.getByRole('img', { name: 'Logo principal do sistema' });
    expect(img.getAttribute("alt")).toBe('Logo principal do sistema');
  })

  it("Deve renderizar o header corretamente", () => {
    const header = screen.getByTestId("header");
    expect(header).not.toBeNull();
  });
});