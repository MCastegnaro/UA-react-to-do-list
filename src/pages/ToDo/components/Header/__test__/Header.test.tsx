import { describe, expect, it } from 'vitest';

import { render, screen } from '@testing-library/react';
import { Header } from '..';

describe('<Header>', () => {
  it('Deve exibir a imagem do logo na tela', () => {
    render(<Header />);
    
    const img = screen.getByAltText('Logo principal do sistema');
    expect(img).not.toBeNull();
  });
});
