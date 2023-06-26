import { beforeAll, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Content } from '..';

describe('<Content>', () => {
    beforeAll(() => {
        render(<Content />);
    })
    
  it('Deve exibir o input na tela', () => {
    const input = screen.getByPlaceholderText('Adicione uma nova tarefa');
    
    expect(input).toBeTruthy();
  });

  it('Deve exibir um botão na tela ', () => {
    const button = screen.getByRole('button', { name: /Criar/i });
    
    expect(button).toBeTruthy();
  })

  it('Deve exibir uma imagem de "um ícone de mais"', () => {
    const img = screen.getByAltText("Ícone de mais");

    expect(img).not.toBeNull();
  })

  it('Deve exibir a frase "Concluídas" no parágrafo', async ()  => {
    const p = await screen.queryByText("Concluídas");

    expect(p).not.toBeNull();
  })
});
