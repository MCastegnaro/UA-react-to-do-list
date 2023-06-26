import { render, screen } from "@testing-library/react";
import { NoContent } from "..";
import { describe, it, expect } from "vitest";

describe("<NoContent />", () => {

    it('Deve renderizar a imagem do NoContent corretamente', () => {
        render(<NoContent />);
        const img = screen.getByAltText("ícone de clipboard");
        expect(img).not.toBeNull();
    })

    it('Deve renderizar o texto do NoContent corretamente', () => {
        const text = screen.getByTestId("text-no-content");
        expect(text).not.toBeNull();
    })
});