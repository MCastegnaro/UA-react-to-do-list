import { beforeAll, describe, expect, it } from 'vitest';

import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from '..';

describe('<NotFound>', () => {

  beforeAll(() => {
    render(<NotFound />, {
      wrapper: BrowserRouter
    });
  })

  it('Deve conter um título na tag h1 "Oops!"', async () => {
    const h1 = await screen.queryByText("Oops!");
    expect(h1).not.toBeNull();
  });

  it('o link deve direcionar para a rota de "/"', () => {
    const link = screen.getByRole("link");
    expect(link.getAttribute("href")).toBe("/");
  });
});