import "./css/reset.css";
import getApi from "./service/getApi";

document.querySelector("#app").innerHTML = `
  <div class="container>
    <h1 class="title">Amazon Scraper</h1>

    <div class="search">
      <input type="text" class="search__input"/>

      <button type="submit" class="search__button">Search</button>
    </div>

    <ul class="products">

      <li class="products__item">
        <h2 class="products__title">SAMSUNG Galaxy A16 5G A Series Cell Phone, Unlocked Android Smartphone, Large AMOLED Display, Durable Design, Super Fast Charging, Expandable Storage, US Version, 2025, Blue Black</h2>
        <img />
        <span class="products__rating">
          4.2 out of 5 stars, rating details
        </span>
        <p class="products__reviews">1,000 customer reviews</p>
      </li>

    </ul>

  </div>
`;

getApi();
