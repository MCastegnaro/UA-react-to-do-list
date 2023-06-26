import { beforeAll, describe, expect, it } from 'vitest';

import { render, screen } from '@testing-library/react';
import { TodoList } from '..';

describe('<TodoList>', () => {
    beforeAll(() => {
        render(<TodoList onDelete={function (id: string): void {
            throw new Error('Function not implemented.');
        } } onChangeCheckbox={function (id: string): void {
            throw new Error('Function not implemented.');
        } } />);
    })

    it('Deve renderizar o componente NoContent quando a lista de tarefas estiver vazia', () => {

        const noContentComponent = screen.getByTestId('no-content');
        
        expect(noContentComponent).not.toBeNull();
    });

 
});