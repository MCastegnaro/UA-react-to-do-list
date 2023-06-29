import { render, screen } from '@testing-library/react';
import { Toast } from '..';
import { beforeAll, describe, expect, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

describe('<Toast />', () => {
  beforeAll(() => {
        render(<Toast message={''} type={'success'} />, { wrapper: BrowserRouter })
    });

    it("Deve renderizar o texto de mensagem corretamente", () => {
    render(<Toast message="Success message" type="success" />);
    
    const toastMessage = screen.getByText(/Success message/i);
    expect(toastMessage).not.toBeNull();
  });

  it("Deve renderizar o estilo de sucesso corretamente", () => {
    render(<Toast message="Success message" type="success" />);
    
    const successStyle = screen.getByTestId('success-style');
    expect(successStyle).not.toBeNull();
  });

  it("Deve renderizar o estilo do container corretamente", () => {
    render(<Toast message="Success message" type="success" />);
    
    const containerStyle = screen.getByTestId('container-show-style');
    expect(containerStyle).not.toBeNull();
  });
});

