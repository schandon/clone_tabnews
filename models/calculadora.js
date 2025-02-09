function soma(x, y) {
  return x + y;
}

function subtracao(x, y) {
  return x - y;
}

function multiplicacao(x, y) {
  return x * y;
}
function divisao(x, y) {
  if (y === 0) {
    throw new Error("Divisão por zero não é permitida.");
  }
  return x / y;
}

exports.soma = soma;
exports.subtracao = subtracao;
exports.multiplicacao = multiplicacao;
exports.divisao = divisao;
