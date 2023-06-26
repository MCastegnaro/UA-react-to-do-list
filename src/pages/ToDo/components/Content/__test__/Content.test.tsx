import { render, screen } from "@testing-library/react";
import { Content } from "..";
import { describe, it, expect } from "vitest";

describe("<Content />", () => {

  
  it("exibir o input", () => {
    const input = screen.getByTestId("input-description");
    expect(input).not.toBeNull();
  });
  it("renderizar o content", () => {
      render(<Content />);
      const content = screen.getByTestId("content");
      expect(content).not.toBeNull();
  });
  
    it("exibir o botão do componente content", () => {
        const button = screen.getByTestId("button-content");
        expect(button).not.toBeNull();
    });
});