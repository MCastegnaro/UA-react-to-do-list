import { Header } from "..";
import { screen, render } from "@testing-library/react";
import { beforeAll, describe, expect, it } from "vitest";
import { BrowserRouter } from "react-router-dom";

describe("<Header />", () => {
  beforeAll(() => {
    render(<Header />, { wrapper: BrowserRouter })
  })

  it("Should render the Header succesfuly", () => {
    const header = screen.getByTestId("header");
    expect(header).not.toBeNull();
  })

})