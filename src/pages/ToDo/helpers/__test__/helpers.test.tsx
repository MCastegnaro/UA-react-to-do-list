import { createNewTask } from "..";
import { describe, expect, it } from "vitest";

describe("createNewTask", () => {
  it("Deve criar uma nova tarefa com um ID, descrição e isDone definido como false", () => {
    const description = "Test task";
    const task = createNewTask(description);

    expect(task.id).toBeDefined();
    expect(task.description).toBe(description);
    expect(task.isDone).toBe(false);
  });
});
