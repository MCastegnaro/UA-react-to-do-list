import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Toast } from "..";
import "@testing-library/jest-dom";

describe('<Toast>', () => {
    
    it('renderize o component toast com uma mensagem e seu tipo sucess', async () => {
        const message = 'success message';
        const type = 'success';
        render(<Toast message={message} type={type} />);

        const toastElement = await screen.findByText(/Success message/i);
        expect(toastElement).not.toBeNull();
       
    });

    it('renderize o component toast com uma mensagem e seu tipo danger', async () => {
        const message = 'danger message';
        const type = 'danger';
        render(<Toast message={message} type={type} />);

        const toastElement = await screen.findByText(/Danger message/i);
        expect(toastElement).not.toBeNull();
       
    });


})
