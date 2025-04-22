import "./css/reset.css";
import "./css/styles.css";
import button from "./js/button.js";

document.querySelector("#app").innerHTML = `
  <div class="container">
    <h1 class="title">Amazon Scraper</h1>

    <div class="search">
      <input type="text" class="search__input"/>

      <button type="submit" class="search__button">Search</button>
    </div>

    <ul class="products"></ul>

  </div>
`;

document.querySelector(".search__button").addEventListener("click", button);
