function quickSort(array) {
  if (array.length < 2) {
    return array;
  }

  const pivo = [array[0]];
  const menor = [];
  const maior = [];
  for (const value of array) {
    if (value < pivo) {
      menor.push(value);
    } else if (value > pivo) {
      maior.push(value);
    }
  }

  return quickSort(menor).concat(pivo.concat(quickSort(maior)));
}

console.log(quickSort([17, 23, 18, 59, 5]));