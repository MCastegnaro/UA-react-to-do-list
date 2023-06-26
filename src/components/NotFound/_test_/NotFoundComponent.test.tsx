import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import NotFound from '..'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import { BrowserRouter } from 'react-router-dom'

describe('NotFound', () => {
    let mock: MockAdapter

    beforeEach(() => {
        mock = new MockAdapter(axios)
    })

    afterEach(() => {
        mock.reset()
    })

    it('Deve exibir a mensagem de erro', async () => {
        const errorResponse = {
            data: null,
            status: 404,
            statusText: 'Not Found',
            message: 'Endpoint não encontrado',
        }

        mock.onGet('/api/not-found').reply(404, errorResponse)

        render(
            <BrowserRouter>
                <NotFound />
            </BrowserRouter>
        )

        await expect(screen.getByText('Not Found')).toBeInTheDocument()
    })

    it('Deve renderizar o botão de voltar', () => {
        render(
            <BrowserRouter>
                <NotFound />
            </BrowserRouter>
        )

        expect(screen.getByText('Voltar')).toBeInTheDocument()
    })
})