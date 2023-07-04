import { BrowserRouter } from "react-router-dom";
import { Content } from "../components/Content";
import { beforeAll, describe, expect, it } from "vitest";
import { screen, render, fireEvent } from "@testing-library/react";

describe("<Content/>", () => {
  beforeAll(() => {
    render(<Content />, { wrapper: BrowserRouter });
  });

  it("Deve renderizar a section corretamente", () => {
    const section = screen.getByTestId("content");
    expect(section).not.toBeNull();
  });
});
