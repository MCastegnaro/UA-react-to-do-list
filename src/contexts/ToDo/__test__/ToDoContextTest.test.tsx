// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import ToDoContext, { ToDoContextProvider, ToDoContextProps } from "../index";
// import { describe, it, expect } from "vitest";
// import { useContext } from "react";

// // Mock do contexto
// const mockContext: ToDoContextProps = {
//   taskListState: [],
//   setTaskListState: jest.fn(),
// };

// describe("ToDoContextProvider", () => {
//   it("renderiza corretamente e fornece o contexto", () => {
//     render(
//       <ToDoContextProvider>
//         <MockChildComponent />
//       </ToDoContextProvider>
//     );

//     // Teste para garantir que o componente filho tenha recebido o contexto corretamente
//     expect(screen.getByTestId("child-component")).toHaveTextContent(
//       JSON.stringify(mockContext)
//     );
//   });

//   it("atualiza o estado da lista de tarefas ao chamar a função de alteração", () => {
//     render(
//       <ToDoContextProvider>
//         <MockChildComponent />
//       </ToDoContextProvider>
//     );

//     const newTaskListState = [{ id: 1, title: "Nova tarefa" }];

//     // Simula a chamada da função de alteração do estado da lista de tarefas
//     userEvent.click(screen.getByTestId("update-task-list-button"), {
//       target: { value: newTaskListState },
//     });

//     // Testa se a função de alteração do estado foi chamada com o novo estado
//     expect(mockContext.setTaskListState).toHaveBeenCalledWith(newTaskListState);
//   });
// });

// // Componente fictício que consome o contexto
// const MockChildComponent = () => {
//   const context = useContext(ToDoContext);

//   return (
//     <div data-testid="child-component">
//       {JSON.stringify(context)}

//       <button
//         onClick={() => {
//           const newTaskListState = [{ id: 1, title: "Nova tarefa" }];
//           context.setTaskListState(newTaskListState);
//         }}
//         data-testid="update-task-list-button"
//       >
//         Atualizar lista de tarefas
//       </button>
//     </div>
//   );
// };
