import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useToast } from "..";

describe("useToast", () => {

    it("Deve retornar um erro ao usar fora do Provider", () => {
        expect(() => {
            renderHook(() => useToast());
        }).toThrowError();
    });
});