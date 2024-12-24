function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector("input");
const create = document.getElementsByTagName("button")[0];
const destroy = document.getElementsByTagName("button")[1];
const boxesContainer = document.querySelector("#boxes");

function createBox(amount) {
  const boxes = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
    size += 10;
  }

  boxesContainer.innerHTML = "";
  boxesContainer.append(...boxes);
}

create.addEventListener("click", (e) => {
  if (0 < input.value && input.value < 100) {
    createBox(input.value);
  }
});
destroy.addEventListener("click", () => {
  boxes.innerHTML = "";
});
