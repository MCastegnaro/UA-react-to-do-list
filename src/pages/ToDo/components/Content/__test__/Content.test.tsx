import { fireEvent, render, screen } from "@testing-library/react";
import { Content } from "..";
import { describe, it, expect, vi } from "vitest";
import { createTask } from "../../../../../services/task";
import { ToastProvider } from "../../../../../contexts/Toast";
import { api } from "../../../../../configs/api";
import MockAdapter from "axios-mock-adapter";

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

    it("Deve exibir o botão do componente content corretamente", () => {
        const button = screen.getByTestId("button-content");
        expect(button).not.toBeNull();
    });
});