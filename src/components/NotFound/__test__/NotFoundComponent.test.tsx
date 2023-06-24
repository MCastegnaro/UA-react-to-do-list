import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import MockAdapter from "axios-mock-adapter";
import { api } from "../../../configs/api";
import NotFound from "..";
import { useRouteError } from "react-router-dom";

describe("NotFound", () => {

    it("should render the error message correctly", () => {
        //   const errorResponse = {
        //     data: {},
        //     status: 404,
        //     statusText: "Not Found",
        //     message: "Page not found",
        //   };

        //   (useRouteError as jest.Mock).mockReturnValue(errorResponse);

        //   render(<NotFound />);

        //   const errorMessage = screen.getByText(/Sorry, an unexpected error has occurred./i);
        //   expect(errorMessage).toBeInTheDocument();

        //   const statusText = screen.getByText(/Not Found/i);
        //   expect(statusText).toBeInTheDocument();

        //   const backButton = screen.getByText(/Voltar/i);
        //   expect(backButton).toBeInTheDocument();
    });
});