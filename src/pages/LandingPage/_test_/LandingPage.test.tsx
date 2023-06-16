import {describe, expect, it} from 'vitest';
import {render, screen} from '@testing-library/react';
import LandingPage from '..';
import { BrowserRouter } from 'react-router-dom';

describe('<LandingPage>', () => {
    it('deve renderizar a landing page corretamente', async () => {
        render(<LandingPage />, {wrapper: BrowserRouter});

        const h1 = await screen.queryByText("To do List");
        
        expect(h1).not.toBeNull();

    })
})