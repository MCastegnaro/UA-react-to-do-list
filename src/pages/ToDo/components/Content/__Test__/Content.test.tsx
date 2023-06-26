import { beforeAll, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Content } from '..';

describe('<Content>', () => {
    beforeAll(() => {
        render(<Content />, {
          wrapper: BrowserRouter
        });
      })

    it('Deve renderizar a imagem Ícone de mais dentro do botao', () => {
        const img = screen.getByAltText("Ícone de mais");
        expect(img).not.toBeNull();
      })

      it('Deve nas className styles.tasks_created aparecer seu conteudo escrito', async () => {
        const p = await screen.queryByText("Tarefas Criadas");
        expect(p).not.toBeNull();
      })

      it('Deve nas className styles.tasks_done aparecer seu conteudo escrito', async () => {
        const p = await screen.queryByText("Concluídas");
        expect(p).not.toBeNull();
      })

      it('Deve conter escrito Criar dentro do botao', async () => {
        const button = await screen.queryByText("Criar");
        expect(button).not.toBeNull();
      })
})