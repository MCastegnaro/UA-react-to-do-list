import { beforeAll, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { NoContent } from '..';

describe('<NoContent>', () => {
    beforeAll(() => {
        render(<NoContent />, {
          wrapper: BrowserRouter
        });
      })
    
      it('Deve renderizar a imagem ícone de clipboard', () => {
        const img = screen.getByAltText("ícone de clipboard");
        expect(img).not.toBeNull();
      })

      it('Deve conter um mensagem se nao tiver nada cadastrado em volta de uma tag <strong>', async () => {
        const strong = await screen.queryByText("Você ainda não tem tarefas cadastradas");
        expect(strong).not.toBeNull();
      })
    
      it('Deve conter um mensagem se nao tiver nada cadastrado', async () => {
        const p = await screen.queryByText("Crie tarefas e organize seus itens a fazer");
        expect(p).not.toBeNull();
      })
})