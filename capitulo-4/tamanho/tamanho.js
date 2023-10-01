function tamanho(array) {
  if (array[0] === undefined) {
    return 0;
  } else if (array[1] === undefined) {
    return 1;
  } else {
    array.pop();
    return 1 + tamanho(array);
  }
}

console.log(tamanho(["s", 2, 3, "doa", 18])); 