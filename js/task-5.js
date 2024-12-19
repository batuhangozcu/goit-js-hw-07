function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");

button.addEventListener("click", (e) => {
  document.querySelector("body").style.backgroundColor = getRandomHexColor();
  document.querySelector(".color").textContent =
    document.querySelector("body").style.backgroundColor;
});

// "body" ve ".color" classlarını yine bir değişkene atayarak da yapabilirdim fakat bu şekilde kullanımını da görmek için bu şekilde yaptım.
