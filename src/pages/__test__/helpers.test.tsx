import { describe, expect, it } from "vitest";
import { createNewTask, removeTask, toggleTaskStatus } from "../helpers";
import { Task } from "../../../models/Task";

describe("Helppers", () => {
  it("Deve ser possível adicionar uma tarefa na lista", () => {
    const task = createNewTask("Tarefa 04");
    expect(task).not.toBeNull();
  });

  it("Deve ser possível remover uma tarefa", async () => {
    const tasks: Task[] = [
      { id: "01", description: "Teste 01", isDone: false },
      { id: "02", description: "Teste 02", isDone: true },
      { id: "03", description: "Teste 03", isDone: false },
    ];

    const deleteTask = removeTask(tasks, "02");
    await expect(deleteTask).toEqual([
      { id: "01", description: "Teste 01", isDone: false },
      { id: "03", description: "Teste 03", isDone: false },
    ]);
  });

  it("Deve ser possível alterar o status da task", () => {
    const tasks: Task[] = [
      { id: "01", description: "Teste 01", isDone: false },
      { id: "02", description: "Teste 02", isDone: true },
      { id: "03", description: "Teste 03", isDone: false },
    ];
    const id = "02";

    const statusTask = toggleTaskStatus(tasks, id);

    expect(statusTask).toEqual([
      { id: "01", description: "Teste 01", isDone: false },
      { id: "02", description: "Teste 02", isDone: false },
      { id: "03", description: "Teste 03", isDone: false },
    ]);
  });

  it("Não deve ser possível alterar estado de task não existente", () => {
    const tasks = [
      { id: "01", description: "Teste 01", isDone: false },
      { id: "02", description: "Teste 02", isDone: true },
    ];
    const id = "3";

    const statusTask = toggleTaskStatus(tasks, id);

    expect(statusTask).toEqual(tasks);
  });
});
