const productsHTML = (products) => {
  const container = document.querySelector(".products");

  container.innerHTML = "";

  products.forEach((product) => {
    const productElement = document.createElement("li");
    productElement.classList.add("products__item");

    const rating =
      product.rating !== "No rating" ? product.rating : "Sem avaliação";
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
