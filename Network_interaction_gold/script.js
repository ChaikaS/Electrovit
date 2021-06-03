async function getInfo(callback) {
  try {
    const responseBase = await fetch("http://api.exchangeratesapi.io/v1/latest?access_key=54d8f6991dfb9538277078338c49f574");
    const responseSymbol = await fetch("http://api.exchangeratesapi.io/v1/symbols?access_key=54d8f6991dfb9538277078338c49f574");

    const dataBase = await responseBase.json();
    const dataSymbol = await responseSymbol.json();

    callback(dataBase, dataSymbol);
  } catch (e) {
    console.error(e);
  }
}

function addInfo(dataBase, dataSymbol) {
  const bases = dataBase.base;
  addBaseSelect(bases);

  const symbols = dataSymbol.symbols;
  const rates = dataBase.rates;
  addSymbol(symbols, rates);
}
getInfo(addInfo);

function addBaseSelect(data) {
  const selectBase = document.querySelector("#base");
  const newOption = new Option(data, data);
  selectBase.append(newOption);
  newOption.selected = false;
}

function addSymbol(symb, rat) {
  const arrSymbols = [];
  for (const [key, value] of Object.entries(symb)) {
    arrSymbols.push(`${key}: ${value}`);
  }
  const selectSymbol = document.querySelector("#symbol");
  arrSymbols.forEach((item) => {
    let option = document.createElement("option");
    option.text = item;
    selectSymbol.append(option);
    option.selected = false;
  });
  addEventListener("change", (e) => {
    if (e.target && e.target.matches("#symbol")) {
      const values = e.target.value.substring(0, 3);
      const result = rat[`${values}`];
      document.querySelector("#result").textContent = result;
    }
  });
}
