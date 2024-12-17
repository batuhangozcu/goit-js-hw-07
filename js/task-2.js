const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const list = document.querySelector(".gallery");
// const item1 = document.createElement("li")
// const item2 = document.createElement("li")
// const item3 = document.createElement("li")
// list.appendChild(item1)
// list.appendChild(item2)
// list.appendChild(item3)

const image = images.map(
  (obj) => `<li><img src="${obj.url}" alt="${obj.alt}">`
).join("");

list.insertAdjacentHTML("afterbegin", image);
