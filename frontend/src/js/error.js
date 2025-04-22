export default function showError(message) {
  const container = document.querySelector(".products");
  container.innerHTML = `<p class='produts__error'> ${message}</p>`;
}
