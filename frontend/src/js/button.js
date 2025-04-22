import getApi from "../service/getApi.js";
import productsHTML from "./productsHTML.js";

export default async function button() {
  const button = document.querySelector(".search__button");
  button.innerHTML = "Loading...";

  const input = document.querySelector(".search__input");
  const keyword = input.value;
  const products = await getApi(keyword);

  input.value = "";

  productsHTML(products.products);
}
