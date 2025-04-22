const productsHTML = (products) => {
  const container = document.querySelector(".products");
  const button = document.querySelector(".search__button");
  button.innerHTML = "Search";

  container.innerHTML = "";

  products.forEach((product) => {
    if (product.title === "No title") return;

    const productElement = document.createElement("li");
    productElement.classList.add("products__item");

    const rating =
      product.rating !== "No rating"
        ? product.rating.split(",")[0]
        : "Sem avaliação";
    const reviews =
      product.reviews !== "No reviews"
        ? `${product.reviews} avaliações`
        : "Sem avaliações";

    productElement.innerHTML = `
        <h2 class="products__title">${product.title}</h2>
        <img src="${product.image}" alt="${product.title}">
        <span class="products__rating">${rating}</span>
        <p class="products__reviews">${reviews}</p>
      `;

    container.appendChild(productElement);
  });
};

export default productsHTML;
