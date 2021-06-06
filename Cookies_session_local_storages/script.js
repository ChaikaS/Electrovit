const form = document.querySelector("#form");
const userPage = document.querySelector("#userPage");
const html = document.querySelector("html");
let mode = localStorage.getItem("mode");

form.addEventListener("change", getData, false);

function getData(e) {
  if (e.target !== e.currentTagget) {
    const input = e.target.id;
    const values = e.target.value;
    localStorage.setItem(input, values);
  }
}

if (localStorage.getItem("inputFirstName") && localStorage.getItem("inputLastName") && localStorage.getItem("inputEmail") && localStorage.getItem("inputPassword")) {
  form.hidden = true;
  document.write(`Hi ${localStorage.getItem("inputFirstName")} ${localStorage.getItem("inputLastName")}`);
  document.body.classList.toggle("user-page");
}

const changeGrayThemse = () => {
  html.classList.add("grey-theme");
  html.classList.remove("aquamarine-theme");
  localStorage.setItem("mode", "grey-theme");
};

const changeAquamarineThemse = () => {
  html.classList.add("aquamarine-theme");
  html.classList.remove("grey-theme");
  localStorage.setItem("mode", "aquamarine-theme");
};

const emptyThemse = () => {
  html.classList.remove("aquamarine-theme");
  html.classList.remove("grey-theme");
  localStorage.setItem("mode", "empty-theme");
};

if (mode === "aquamarine-theme") {
  changeAquamarineThemse();
} else if (mode === "grey-theme") {
  changeGrayThemse();
} else {
  emptyThemse();
}

addEventListener("click", (e) => {
  if (e.target && e.target.matches("#button__change")) {
    mode = localStorage.getItem("mode");
    if (mode === "empty-theme") {
      changeAquamarineThemse();
    } else if (mode === "aquamarine-theme") {
      changeGrayThemse();
    } else if (mode === "grey-theme") {
      changeAquamarineThemse();
    }
  }
});
