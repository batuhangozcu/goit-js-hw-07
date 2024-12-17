const categories = document.querySelector("#categories");
console.log(`Number of categories: ${categories.children.length}`);

const item = document.querySelectorAll(".item");

item.forEach((items) => {
  const categoryName = items.querySelector("h2").textContent;
  console.log(`Category: ${categoryName}`);
  const elements = items.querySelectorAll("ul li").length;
  console.log(`Elements: ${elements}`);
});
