import { render, screen } from "@testing-library/react";
import { Header } from "..";
import { describe, it, expect } from "vitest";

describe("<Header/>", () => {
  it("Deve renderizar o header corretamente", () => {
    render(<Header />);
    const header = screen.getByTestId("header");
    expect(header).not.toBeNull();
  });
});