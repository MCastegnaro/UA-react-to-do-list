import MockAdapter from "axios-mock-adapter";
import { api } from "../../../configs/api";
import { beforeAll, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Toast } from "..";

const mock = new MockAdapter(api);

describe("<ToastContext>", () => {
    describe('Toast', () => {
        beforeAll(() =>{
            mock.reset();
        });
        
        it('Deve renderizar o Toast com mensagem erro', () =>{
            const message = 'Danger message';
            const type = 'danger';
            render(<Toast message={message} type={type} />);
            const toastElement = screen.findByText(/Danger message/i);
            expect(toastElement).not.toBeNull();
        })


        it('Deve renderizar o Toast com mensagem sucesso', () =>{
            const message = 'Success message';
            const type = 'success';
            render(<Toast message={message} type={type} />);
            const toastElement = screen.findByText(/Success message/i);
            expect(toastElement).not.toBeNull();
        })
    })
})