import { renderHook } from "react-hooks-testing-library";
import { useToast } from "..";
import { describe, expect, it } from "vitest";
import { ToastContextProps } from "../../../contexts/Toast";
import { BrowserRouter } from "react-router-dom";

describe("useToast", () => {
  it("Deve lançar um erro se usado fora do ToastProvider", () => {
    const { result } = renderHook(() => useToast(), {
      wrapper: BrowserRouter,
    });

    expect(result.error?.message).toBe(
      "useToast must be used within a ToastProvider"
    );
  });

  it("Deve retornar o contexto corretamente", () => {
    const toastContextValue: ToastContextProps = {
        showToast: () => { },
        isHidden: false
    };

    const { result } = renderHook(() => useToast(), {
      wrapper: BrowserRouter,
      initialProps: { value: toastContextValue },
    });

    expect(result.current).toEqual(toastContextValue);
  });
});
