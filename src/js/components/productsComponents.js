import productList from "../database/products";

const renderList = (productList, listElement) => {
  productList.forEach((product) => {
    console.log(product.title);

    // Create elements
    const item = document.createElement("li");
    const title = document.createElement("p");

    // Add class
    title.classList.add("product__title");

    // Add content
    title.textContent = product.title;

    // Append
    // listElement.append(item);
  });
};

export default renderList;
