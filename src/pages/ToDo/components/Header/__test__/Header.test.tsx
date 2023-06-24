import { render, screen } from "@testing-library/react";
import { Header } from "..";
import { describe, it, expect } from "vitest";

describe("<Header />", () => {
    it("Deve renderizar o header corretamente", () => {
        render(<Header />);
        const header = screen.getByTestId("header");
        expect(header).not.toBeNull();
    });

    it('Deve renderizar a imagem da logo no header corretamente', () => {
        const img = screen.getByAltText("Logo principal do sistema");
        expect(img).not.toBeNull();
    })
});
