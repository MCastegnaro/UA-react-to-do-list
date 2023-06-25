import { render, screen } from "@testing-library/react";
import { NoContent } from "..";
import { describe, it, expect } from "vitest";

describe("<NoContent />", () => {

    it('Deve renderizar a imagem em NoContent corretamente', () => {
        render(<NoContent />);
        const img = screen.getByAltText("ícone de clipboard");
        expect(img).not.toBeNull();
    })

    it('Deve renderizar o texto em NoContent corretamente', () => {
        const text = screen.getByTestId("texto");
        expect(text).not.toBeNull();
    })
});