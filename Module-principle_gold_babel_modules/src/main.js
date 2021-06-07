import "core-js/stable";
import "regenerator-runtime/runtime";
import "./main.css";
import { addBaseSelect, addSymbol } from "./populate.js";

const errorMessage = document.querySelector("body");

async function load() {
  let modules = await import("./fetch.js");
  modules
    .getInfo()
    .then((summInfo) => {
      addBaseSelect(summInfo.bases);
      addSymbol(summInfo.symbols);

      addEventListener("change", (e) => {
        if (e.target && e.target.matches("#symbol")) {
          const values = e.target.value.substring(0, 3);
          const result = summInfo.rates[`${values}`];
          document.querySelector("#result").textContent = result;
        }
      });
    })
    .catch((err) => {
      errorMessage.textContent = err.message;
    });
}
load();
