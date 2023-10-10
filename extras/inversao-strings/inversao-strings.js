function invercaoStrings(string) {
  const indiceFinal = string.length - 1;

  if (indiceFinal < 1) {
    return string;
  }

  return string.charAt(indiceFinal) + invercaoStrings(string.substring(1, indiceFinal)) + string.charAt(0);
}

console.log(invercaoStrings("Douglas"));