import { div } from "./div";

test("Test ok", () => {
  expect(div(10, 2)).toBe(5);
});

test("Test error", () => {
    expect(div(1, 0)).toBe("El divisor debe ser diferente a cero");
});