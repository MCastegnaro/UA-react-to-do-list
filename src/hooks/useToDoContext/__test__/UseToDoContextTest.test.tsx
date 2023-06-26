import { describe, expect, it } from "vitest";
import { renderHook } from "@testing-library/react";
import useToDoContext from "..";

describe("useToDoContext", () => {
    it("O hook useToDoContext não deve funcionar quando usado fora do ToDoContextProvider", () => {
        expect(() => {
            renderHook(() => useToDoContext());
        }).toThrowError;
    });

   
});