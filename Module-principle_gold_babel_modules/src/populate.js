export function addBaseSelect(bases) {
  const selectBase = document.querySelector("#base");
  const newOption = new Option(bases, bases);
  selectBase.append(newOption);
  newOption.selected = false;
}

export function addSymbol(symbols) {
  const arrSymbols = [];
  for (const [key, value] of Object.entries(symbols)) {
    arrSymbols.push(`${key}: ${value}`);
  }
  const selectSymbol = document.querySelector("#symbol");
  arrSymbols.forEach((item) => {
    let option = document.createElement("option");
    option.text = item;
    selectSymbol.append(option);
    option.selected = false;
  });
}
