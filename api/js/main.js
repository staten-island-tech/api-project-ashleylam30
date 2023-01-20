import { DOM } from "../js/DOM.js";
import "../styles/style.css";

const link = `https://pokeapi.co/api/v2/pokemon/`;

async function api(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  let input = DOM.input.value;
  DOM.btn.addEventListener("click", function () {
    DOM.page.insertAdjacentHTML(
      "beforeend",
      `<div>
    <img src="${data.sprites.front_default}"><img>
    </div>`
    );
  });
}
api(link);

DOM.btn;
