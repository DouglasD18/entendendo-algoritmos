function soma(array) {
  if (array.length === 0) {
    return 0
  } else if (array.length === 1) {
    return array[0];
  } else {
    const pop = array.pop();
    return pop + soma(array);
  }
}

console.log(soma([2, 4, 6]));