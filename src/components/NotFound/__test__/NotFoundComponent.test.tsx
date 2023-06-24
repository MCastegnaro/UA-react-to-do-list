import { screen, render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import NotFound from "..";
import { BrowserRouter } from "react-router-dom";

describe("<NotFound />", () => {
    // beforeAll(() => {
    //     render(<NotFound />, { wrapper: BrowserRouter })
    //   })
    it("Deve renderizar a section do componente notfound corretamente", () => {
        // const notFound = await screen.getByTestId("section-not-found");
        // expect(notFound).not.toBeNull();
    });
});
