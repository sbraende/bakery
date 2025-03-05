import productList from "../database/productsList";

const renderList = (productList, listElement) => {
  productList.forEach((product) => {
    console.log(product.imagePath);

    // Create elements
    const item = document.createElement("li");
    const image = document.createElement("img");
    const title = document.createElement("p");
    const price = document.createElement("p");

    // Add class
    title.classList.add("product__title");
    image.classList.add("product__image");
    price.classList.add("product__price");

    // Add content
    image.src = product.imagePath;
    image.alt = `Image of ${product.title}`;
    title.textContent = product.title;
    price.textContent = product.price;

    // Append
    listElement.append(item);
    item.append(image, title, price);
  });
};

export default renderList;
