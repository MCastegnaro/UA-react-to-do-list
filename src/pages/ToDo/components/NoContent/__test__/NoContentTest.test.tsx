import { render, screen } from "@testing-library/react";
import { NoContent } from "..";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";

describe("<NoContent />", () => {

    beforeAll(() => {
        render(<NoContent />, { wrapper: BrowserRouter })
    })

    it('Deve renderizar a imagem em NoContent corretamente', () => {
        const img = screen.getByAltText("ícone de clipboard");
        expect(img).not.toBeNull();
    })

    it('Deve renderizar o texto em NoContent corretamente', () => {
        const text = screen.getByTestId("texto");
        expect(text).not.toBeNull();
    })
});