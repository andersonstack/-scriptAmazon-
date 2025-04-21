export default function extractProductsFromDOM(document) {
  const productElements = document.querySelectorAll('div[role="listitem"]');
  const products = [];

  productElements.forEach((element) => {
    const title =
      element.querySelector("h2 span")?.textContent?.trim() || "No title";
    const image = element.querySelector("img")?.src || "No image";
    const rating =
      element
        .querySelector('[aria-label*="out of 5 stars"]')
        ?.getAttribute("aria-label") || "No rating";
    const reviews =
      element
        .querySelector('[aria-label*="ratings"], [aria-label*="reviews"]')
        ?.textContent?.trim() || "No reviews";

    products.push({
      title,
      image,
      rating,
      reviews,
    });
  });

  return products;
}
