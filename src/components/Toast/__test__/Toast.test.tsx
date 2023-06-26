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

        it('Should render the toast with error mensage', () => {
            render(<Toast message={'Danger message'} type={'danger'} />);
            const toast = screen.findByText(/Danger message/i);
            expect(toast).not.toBeNull();
        })

        it('Should render the toast with sucess mensagem', () =>{
            render(<Toast message={'Success message'} type={'success'} />);
            const toast = screen.findByText(/Success message/i);
            expect(toast).not.toBeNull();
        })
    })
})