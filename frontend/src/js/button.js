import getApi from "../service/getApi.js";
import productsHTML from "./productsHTML.js";

export default async function button() {
  const input = document.querySelector(".search__input");
  const keyword = input.value;
  const products = await getApi(keyword);
  productsHTML(products.products);
}
