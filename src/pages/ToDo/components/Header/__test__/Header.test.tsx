import { BrowserRouter } from "react-router-dom";
import { Header } from "..";
import { render, screen } from "@testing-library/react";
import { beforeAll, describe, expect, it } from 'vitest';

describe('<Header>', () => {

  beforeAll(() => {
    render(<Header />, {
      wrapper: BrowserRouter
    });
  })

  it('Deve conter uma tag com header"', async () => {
    const header = await screen.getByTestId("header");
    expect(header).not.toBeNull();
  })

  it('Deve renderizar a imagem da Logo principal do sistema', () => {
    const img = screen.getByAltText("Logo principal do sistema");
    expect(img).not.toBeNull();
  })

})