function adicionar(valor) {
  document.getElementById('display').value += valor;
}

function limpar() {
  document.getElementById('display').value = '';
}

function calcular() {
  try {
    const resultado = eval(document.getElementById('display').value);
    document.getElementById('display').value = resultado;
  } catch {
    document.getElementById('display').value = 'Conta inválida';
  }
}
