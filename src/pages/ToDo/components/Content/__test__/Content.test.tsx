import { screen, render } from "@testing-library/react";
import { beforeAll, describe, expect, it } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { Content } from "..";

describe("<Content />", () => {
  beforeAll(() => {
      render(<Content />, { wrapper: BrowserRouter })
  })

  it('Should have the content text "Criar"', async () => {
      const content = await screen.queryByText("Criar");
      expect(content).not.toBeNull();
  })

  it('Should have the content text "Tarefas Criadas"', async () => {
      const content = await screen.queryByText("Tarefas Criadas");
      expect(content).not.toBeNull();
  })

  it('Should have the content text "Concluidas"', async () => {
      const content = await screen.queryByText("Concluídas");
      expect(content).not.toBeNull();
  })

  it('Should have the content text "Ícone de mais', () => {
      const alt = screen.getByAltText('Ícone de mais');
      expect(alt).not.toBeNull();
  })
})