import { DOM } from "../js/DOM.js";
import "../styles/style.css";

const api = `https://pokeapi.co/api/v2/pokemon/`;

async function apifunction(url) {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  DOM.page.insertAdjacentHTML(
    "beforeend",
    `
  
  <div>
  <img src=""><img>
  </div>
  `
  );
}

DOM.btn.addEventListener("click", function (event) {
  event.preventDefault();
  apifunction(api);
});
