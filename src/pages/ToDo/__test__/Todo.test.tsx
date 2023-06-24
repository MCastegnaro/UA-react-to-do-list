import { screen, render } from "@testing-library/react";
import { beforeAll, describe, expect, it } from "vitest";
import ToDo from "..";
import { BrowserRouter } from "react-router-dom";
import { createNewTask, toggleTaskStatus } from "../helpers";

describe("<Todo />", () => {
  beforeAll(() => {
    render(<ToDo />, { wrapper: BrowserRouter })
  })
  it("Deve renderizar o header corretamente", () => {
    const header = screen.getByTestId("header");
    expect(header).not.toBeNull();
  })

  it("Deve renderizar o content corretamente", () => {
    const content = screen.getByTestId("content");
    expect(content).not.toBeNull();
  })

  it('Deve renderizar a imagem de header', () => {
    const img = screen.getByAltText("Logo principal do sistema");
    expect(img).not.toBeNull();
  })
  it('Deve renderizar a imagem de No content', () => {
    const img = screen.getByAltText("ícone de clipboard");
    expect(img).not.toBeNull();
  })
  it("Deve renderizar o content corretamente", () => {
    const content = screen.getByTestId("no-content");
    expect(content).not.toBeNull();
  })
 
  it("Deve criar uma nova tarefa corretamente", () => {
    const description = "Nova tarefa";
    const task = createNewTask(description);

    expect(task.id).toBeDefined();
    expect(task.description).toBe(description);
    expect(task.isDone).toBe(false);
  });

  it("Deve mudar o status de uma tarefa corretamente", () => {
    const taskList = [
      { id: "1", description: "Tarefa 1", isDone: false },
      { id: "2", description: "Tarefa 2", isDone: true },
     ];
    const idToToggle = "2";

    const updatedTaskList = toggleTaskStatus(taskList, idToToggle);
    const toggledTask = updatedTaskList.find((task) => task.id === idToToggle);

    expect(toggledTask).toBeDefined();
    expect(toggledTask!.isDone).toBe(false);
  });


})

