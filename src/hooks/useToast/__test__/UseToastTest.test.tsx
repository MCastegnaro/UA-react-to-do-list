import { renderHook } from "@testing-library/react-hooks";
import { ToastContextProps } from "../../../contexts/Toast";
import { useToast } from "../index";
import React from "react";

// Mock do contexto
const mockContext: ToastContextProps = {
  showToast: jest.fn(),
  isHidden: false
};

describe("useToast", () => {
  beforeEach(() => {
    // Configura o mock do useContext para retornar o contexto mockado
    jest.spyOn(React, "useContext").mockReturnValue(mockContext);
  });

  afterEach(() => {
    // Restaura a implementação original do useContext após cada teste
    jest.restoreAllMocks();
  });

  it("retorna o contexto corretamente", () => {
    const { result } = renderHook(() => useToast());
    expect(result.current).toEqual(mockContext);
  });

  it("lança um erro quando não é usado dentro de um ToastProvider", () => {
    jest.spyOn(React, "useContext").mockReturnValue(undefined);

    expect(() => {
      renderHook(() => useToast());
    }).toThrowError("useToast must be used within a ToastProvider");
  });
});
