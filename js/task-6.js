function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector("input");
const create = document.getElementsByTagName("button")[0];
const destroy = document.getElementsByTagName("button")[1];
const boxes = document.querySelector("#boxes");

function createBox(amount) {
  const size = Array.from({ length: amount }, (_, index) => 30 + index * 10);
  const fragment = document.createDocumentFragment();
  boxes.innerHTML = "";
  size.forEach((s) => {
    const box = document.createElement("div");
    box.style.width = `${s}px`;
    box.style.height = `${s}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
  });
  boxes.appendChild(fragment);
}

create.addEventListener("click", (e) => {
  if (0 < input.value && input.value < 100) {
    createBox(input.value);
  }
});
destroy.addEventListener("click", () => {
  boxes.innerHTML = "";
});
