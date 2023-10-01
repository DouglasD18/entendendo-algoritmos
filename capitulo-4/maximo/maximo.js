function maximo(array) {
  if (array.length === 0) {
    return 0;
  } else if (array.length === 1) {
    return array[0];
  } else {
    if (array[0] < array[array.length - 1]) {
      array.shift();
      return maximo(array);
    } else {
      array.pop();
      return maximo(array);
    }
  }
}

console.log(maximo([7, 4, 18, 9, 5]));