import { describe, it, beforeEach, afterEach } from "vitest";
import React from "react";
import { renderHook } from "@testing-library/react";
import { useToast } from "..";
import ToastContext, { ToastContextProps } from "../../../contexts/Toast";

const mockContext: ToastContextProps = {
  showToast: jest.fn(),
  isHidden: false
};

describe("useToast", () => {
  beforeEach(() => {

    jest.spyOn(React, "useContext").mockReturnValue(mockContext);
  });

  afterEach(() => {

    jest.restoreAllMocks();
  });
    it("retorna o contexto corretamente", () => {
    const { result } = renderHook(() => useToast(), {
      wrapper: ({ children }) => (
        <ToastContext.Provider value={mockContext}>
          {children}
        </ToastContext.Provider>
      )
    });

  it("lança um erro quando não é usado dentro de um ToastProvider", () => {
    jest.spyOn(React, "useContext").mockReturnValue(undefined);

    expect(() => {
      renderHook(() => useToast());
    }).toThrowError("useToast deve ser usado dentro de um ToastProvider");
  });
    expect(result.current).toEqual(mockContext);
  });
});
