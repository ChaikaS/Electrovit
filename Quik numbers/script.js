addEventListener("change", (e) => {
  if (e.target && e.target.matches("#input")) {
    const values = e.target.value;
    polishNotation(values);
  }
});
async function polishNotation(values) {
  const stack = [];
  const item = values.split(" ");

  for (let i = 0; i < item.length; i++) {
    if (!isNaN(item[i]) && isFinite(item[i])) {
      stack.push(item[i]);
    } else {
      const firtsNumber = stack.pop();
      const secondNumber = stack.pop();

      function summ() {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(stack.push(Number(firtsNumber) + Number(secondNumber)));
          }, 2000);
        });
      }
      function diff() {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(stack.push(Number(secondNumber) - Number(firtsNumber)));
          }, 2000);
        });
      }
      function multiply() {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(stack.push(Number(firtsNumber) * Number(secondNumber)));
          }, 2000);
        });
      }
      function divide() {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(stack.push(Number(secondNumber) / Number(firtsNumber)));
          }, 2000);
        });
      }

      if (item[i] === "+") {
        await summ();
      } else if (item[i] === "-") {
        await diff();
      } else if (item[i] === "*") {
        await multiply();
      } else if (item[i] === "/") {
        await divide();
      }
    }
    console.log(stack);
  }
  return (document.querySelector("#result").textContent = stack);
}
