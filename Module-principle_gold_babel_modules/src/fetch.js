import "core-js/stable";
import "regenerator-runtime/runtime";

const errorMessage = document.querySelector("body");

export async function getInfo() {
  try {
    const responseBase = await fetch("http://api.exchangeratesapi.io/v1/latest?access_key=54d8f6991dfb9538277078338c49f574");
    const responseSymbol = await fetch("http://api.exchangeratesapi.io/v1/symbols?access_key=54d8f6991dfb9538277078338c49f574");

    const dataBase = await responseBase.json();
    const dataSymbol = await responseSymbol.json();

    return {
      bases: dataBase.base,
      rates: dataBase.rates,
      symbols: dataSymbol.symbols,
    };
  } catch (err) {
    errorMessage.textContent = err.message;
  }
}
