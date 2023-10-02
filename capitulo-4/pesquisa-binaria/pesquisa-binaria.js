function recursao(array, numero, minimo, maximo) {
  if (minimo > maximo) {
    return -1;
  }

  const meio = Math.floor((maximo + minimo) / 2);

  if (array[meio] === numero) {
    return meio;
  } else if (array[meio] < numero) {
    return recursao(array, numero, meio + 1, maximo);
  } else {
    return recursao(array, numero, minimo, meio - 1);
  }
}

function pesquisaBinaria(array, numero) {
  return recursao(array, numero, 0, array.length - 1);
}

console.log(pesquisaBinaria([3, 4, 18, 27, 77], 18));