import { renderHook } from "@testing-library/react";
import { useToast } from "..";
import ToastContext, { ToastContextProps } from "../../../contexts/Toast";
import { expect, it } from "vitest";

// const mockToastContext: ToastContextProps = {
//   isHidden: false,
//   showToast: jest.fn(),
// };

it("Deve retornar o contexto corretamente", () => {
//   const wrapper = ({ children }: { children: React.ReactNode }) => (
//     <ToastContext.Provider value={mockToastContext}>
//       {children}
//     </ToastContext.Provider>
//   );

//   const { result } = renderHook(() => useToast(), { wrapper });

//   expect(result.current).toEqual(mockToastContext);
});
