import { render, screen } from "@testing-library/react";
import { Content } from "..";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";

describe("<Content />", () => {

    it("Deve renderizar o content corretamente", () => {
        render(<Content />);
        const content = screen.getByTestId("content");
        expect(content).not.toBeNull();
    });

    it("Deve exibir o input corretamente", () => {
        const input = screen.getByTestId("input-description");
        expect(input).not.toBeNull();
    });

});
