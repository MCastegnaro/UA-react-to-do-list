import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { Header } from ".."

describe("<Header />", () => {
    it("Deverá renderizar o componente Header corretamente", () => {
        render(<Header />)
        const header = screen.getByTestId("header")
        expect(header).not.toBeNull()
    })

    it('Deverá renderizar a imagem da logo no Header corretamente', () => {
        const img = screen.getByAltText("Logo principal do sistema")
        expect(img).not.toBeNull()
    })
})