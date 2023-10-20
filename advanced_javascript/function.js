function sumUp(...numbers) {
  let result = 0;

  for (const number of numbers) {
    result += number;
  }
  return result;
}

console.log(sumUp(1, 5, 10, 11, 20));
