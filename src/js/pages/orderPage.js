import renderList from "../components/productsComponents";
import productList from "../database/productsList";

const listElement = document.querySelector(".products");

window.addEventListener("DOMContentLoaded", () => {
  renderList(productList, listElement);
});
