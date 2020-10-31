function subtracao(n1, n2) {
  let result = parseInt(parseInt(n1) - parseInt(n2));
  if (isNaN(result)) return Error("Invalid Operation.");

  return result;
}

function adicao(n1, n2) {
  let result = parseInt(parseInt(n1) + parseInt(n2));
  if (isNaN(result)) return Error("Invalid Operation.");

  return result;
}

function multiplicacao(n1, n2) {
  let result = parseInt(parseInt(n1) * parseInt(n2));
  if (isNaN(result)) return Error("Invalid Operation.");

  return result;
}

function divisao(n1, n2) {
  if (n2 == 0) return "Não é possível dividir por zero";

  let result = parseInt(parseInt(n1) / parseInt(n2));
  if (isNaN(result)) return Error("Invalid Operation.");

  return result;
}

module.exports = {
  subtracao,
  adicao,
  multiplicacao,
  divisao,
};
