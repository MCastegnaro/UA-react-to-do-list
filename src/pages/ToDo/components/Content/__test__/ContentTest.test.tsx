import { render, screen } from "@testing-library/react";
import { Content } from "..";
import { describe, it, expect } from "vitest";

describe("<Content/>", () => {

    it("Deve renderizar o Content corretamente", () => {
        render(<Content/>);
        const content = screen.getByTestId("content");
        expect(content).not.toBeNull();
    });

    it("Deve exibir o input em Content corretamente", () => {
        const input = screen.getByTestId("input");
        expect(input).not.toBeNull();
    });

    it("Deve exibir o botão em Content corretamente", () => {
        const button = screen.getByTestId("button");
        expect(button).not.toBeNull();
    });

});