import { NoContent } from "..";
import { screen, render } from "@testing-library/react";
import { beforeAll, describe, expect, it } from "vitest";
import { BrowserRouter } from "react-router-dom";

describe("<NoContent />", () => {
  beforeAll(() => {
    render(<NoContent />, { wrapper: BrowserRouter })
  })

  it('Should have a tittle at tag h1', async () => {
    const content = await screen.queryByText("Crie tarefas e organize seus itens a fazer");
    expect(content).not.toBeNull();
  })

  it('Should have a tittle at tag h1', async () => {
    const content = await screen.queryByText("Você ainda não tem tarefas cadastradas");
    expect(content).not.toBeNull();
  })

})