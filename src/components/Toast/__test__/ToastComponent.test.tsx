import { describe, expect, it } from "vitest";
import { Toast } from "..";
import { render, screen } from "@testing-library/react";

describe('Toast', () => {
    it('Deve renderizar toast com mensagem de sucesso', () => {

        const message = 'Success message';
        const type = 'success';

        render(<Toast message={message} type={type} />);

        const toastElement = screen
        .findByText(/Success message/i);

        expect(toastElement).not.toBeNull();
    });
});
