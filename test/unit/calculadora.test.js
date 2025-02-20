const calculadora = require("../../models/calculadora.js");

test("Somar 2 + 2 deveria retorna 4", () => {
  expect(calculadora.soma(2, 2)).toBe(4);
});

test("Somar 100 + 5 deveria retorna 105", () => {
  expect(calculadora.soma(100, 5)).toBe(105);
});

test("Somar 2 - 2 deveria retorna 0", () => {
  expect(calculadora.subtracao(2, 2)).toBe(0);
});
test("Somar 2 x 2 deveria retorna 4", () => {
  expect(calculadora.multiplicacao(2, 2)).toBe(4);
});
test("Somar 2 / 2 deveria retorna 1", () => {
  expect(calculadora.divisao(2, 2)).toBe(1);
});
