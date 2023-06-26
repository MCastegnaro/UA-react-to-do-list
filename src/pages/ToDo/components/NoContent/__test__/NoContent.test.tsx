import { describe, expect, it } from 'vitest';

import { render, screen } from '@testing-library/react';
import { NoContent } from '..';

describe('<NoContent>', () => {
    it('Deve exibir a imagem do clipboard na tela', () => {
        render(<NoContent />);
        
        const img = screen.getByAltText('ícone de clipboard');
        expect(img).not.toBeNull();
    });

    it('Deve conter um parágrafo na tag p', async () => {
        const p = await screen.queryByText("Você ainda não tem tarefas cadastradas Crie tarefas e organize seus itens a fazer");
        expect(p).toBeTruthy;
    })
});