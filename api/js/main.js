import { DOM } from "../js/DOM.js";
import "../styles/style.css";

async function apifunction(url) {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  DOM.page.insertAdjacentHTML(
    "beforeend",
    `
  
  <div class="child">
  <img src="${data.sprites.front_default}"><img>
  </div>
  `
  );
}

DOM.btn.addEventListener("click", function (event) {
  let input = DOM.input.value;
  let api = `https://pokeapi.co/api/v2/pokemon/${input}`;
  event.preventDefault();
  apifunction(api);
});
