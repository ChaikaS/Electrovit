async function reversePolishNotation(values = []) {
  const stack = [];

  for (let i = 0; i < values.length; i++) {
    if (!isNaN(values[i]) && isFinite(values[i])) {
      stack.push(values[i]);
    } else {
      const firtsNumber = Number(stack.pop());
      const secondNumber = Number(stack.pop());

      if (values[i] === "+") {
        const summResult = await wrapAsPromise(() => firtsNumber + secondNumber, 2000);
        stack.push(summResult);
      } else if (values[i] === "-") {
        const diffResult = await wrapAsPromise(() => secondNumber - firtsNumber, 2000);
        stack.push(diffResult);
      } else if (values[i] === "*") {
        const multiplyResult = await wrapAsPromise(() => secondNumber * firtsNumber, 2000);
        stack.push(multiplyResult);
      } else if (values[i] === "/") {
        const divideResult = await wrapAsPromise(() => secondNumber / firtsNumber, 2000);
        stack.push(divideResult);
      }
    }
    console.log(stack);
  }
  if (stack.length > 1) {
    return "Ahtyng";
  } else {
    return stack[0];
  }
}

function wrapAsPromise(callback, delay = 5000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(callback());
    }, delay);
  });
}

export default reversePolishNotation;
