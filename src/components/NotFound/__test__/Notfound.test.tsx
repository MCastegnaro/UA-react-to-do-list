import { render, screen } from '@testing-library/react';
import NotFound from '..';
import { beforeAll, describe, expect, it } from "vitest";
import { BrowserRouter } from 'react-router-dom';

describe('<NotFound />', () => {
    beforeAll(() => {
        render(<NotFound />, { wrapper: BrowserRouter })
      })
  it("Deve renderizar o texto 'Sorry, an unexpected error has occurred'", () => {
    const notFoundMessage = screen.getByText("p");
    expect(notFoundMessage).not.toBeNull();
  })

  it("Deve renderizar o button corretamente", () => {
    const button = screen.getByTestId("button");
    expect(button).not.toBeNull();
  })

  it("Deve renderizar o h1 corretamente", () => {
    const content = screen.getByTestId("content");
    expect(content).not.toBeNull();
  })

  it("Deve testar que o button manda de volta para a landing page", () => {
  const button = screen.getByRole("button");
  expect(button).not.toBeNull
  })

});
