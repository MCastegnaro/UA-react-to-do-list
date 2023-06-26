import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { NoContent } from "..";

describe("<NoContent />", () => {

    it('Deverá renderizar a imagem NoContent corretamente', () => {
        render(<NoContent />);
        const img = screen.getByAltText("ícone de clipboard");
        expect(img).not.toBeNull();
    })

    it('Deve renderizar o texto de NoContent corretamente', () => {
        const text = screen.getByTestId("text-no-content");
        expect(text).not.toBeNull();
    })
});