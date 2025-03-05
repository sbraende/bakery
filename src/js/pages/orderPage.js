import renderList from "../components/productsComponents";
import productList from "../database/products";

const listElement = document.querySelector("list");

window.addEventListener("DOMContentLoaded", () => {
  renderList(productList, listElement);
});
