import reversePolishNotation from "./calculation.js";

addEventListener("change", async (e) => {
  if (e.target && e.target.matches("#input")) {
    const values = e.target.value.split(" ");
    const result = await reversePolishNotation(values);
    document.querySelector("#result").textContent = result;
  }
});
