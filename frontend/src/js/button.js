import getApi from "../service/getApi.js";
import productsHTML from "./productsHTML.js";
import showError from "./error.js";

export default async function button() {
  const input = document.querySelector(".search__input");
  const keyword = input.value;
  if (!keyword) {
    showError();
    return;
  }
  const products = await getApi(keyword);

  const button = document.querySelector(".search__button");
  button.innerHTML = "Loading...";

  input.value = "";

  productsHTML(products.products);
}
