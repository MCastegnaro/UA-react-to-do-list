import { createNewTask, removeTask, toggleTaskStatus } from ".."
import { describe, expect, it } from "vitest"
import { Task } from "../../../../models/Task"

describe("createNewTask", () => {
    it("Deverá criar uma nova Task com ID, descrição e isDone: false", () => {
        const description = "Test task"
        const task = createNewTask(description)

        expect(task.id).toBeDefined()
        expect(task.description).toBe(description)
        expect(task.isDone).toBe(false)
    })

    it("Devera remover uma Task da lista de tasks com base no ID", () => {
        const taskIdToRemove = "task2"
        const taskList: Task[] = [
            { id: "task1", description: "Task 1", isDone: false },
            { id: taskIdToRemove, description: "Task 2", isDone: true },
            { id: "task3", description: "Task 3", isDone: false },
        ]

        const updatedTaskList = removeTask(taskList, taskIdToRemove)

        expect(updatedTaskList.length).toBe(taskList.length - 1)
        expect(updatedTaskList.find((task) => task.id === taskIdToRemove)).toBeUndefined()
    })

    it("Deverá alternar o status isDone de uma Task com base no ID", () => {
        const taskIdToToggle = "task2"
        const taskList: Task[] = [
            { id: "task1", description: "Task 1", isDone: false },
            { id: taskIdToToggle, description: "Task 2", isDone: true },
            { id: "task3", description: "Task 3", isDone: false },
        ]

        const updatedTaskList = toggleTaskStatus(taskList, taskIdToToggle)
        const toggledTask = updatedTaskList.find((task) => task.id === taskIdToToggle)

        expect(toggledTask).toBeDefined()
        expect(toggledTask!.isDone).toBe(!taskList.find((task) => task.id === taskIdToToggle)!.isDone)
    })
})