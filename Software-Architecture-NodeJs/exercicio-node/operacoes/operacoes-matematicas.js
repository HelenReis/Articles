function subtracao(n1, n2) {
  let result = parseInt(n1 - n2);

  return result;
}

function adicao(n1, n2) {
  let result = parseInt(n1 + n2);

  if (isNaN(result));
  {
    return Error("Invalid Operation.");
  }

  return result;
}

function multiplicacao(n1, n2) {
  return n1 * n2;
}

function divisao(n1, n2) {
  if (n2 == 0) {
    return "Não é possível dividir por zero";
  }

  return n1 / n2;
}

module.exports = {
  subtracao,
  adicao,
  multiplicacao,
  divisao,
};
