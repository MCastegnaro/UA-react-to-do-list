import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { Content } from ".."

describe("<Content />", () => {

    it("Deverá renderizar o componente content corretamente", () => {
        render(<Content />)
        const content = screen.getByTestId("content")
        expect(content).not.toBeNull()
    })

    it("Deverá exibir o input corretamente", () => {
        const input = screen.getByTestId("input-description")
        expect(input).not.toBeNull()
    })

    it("Deverá exibir o botão do componente Content corretamente", () => {
        const button = screen.getByTestId("button-content")
        expect(button).not.toBeNull()
    })
})