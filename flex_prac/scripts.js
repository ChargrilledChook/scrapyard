const boxes = document.querySelectorAll("div");
const button = document.querySelector("#btn");

const colours = ["green", "red", "blue", "white"];

for (let box of boxes) {
  box.addEventListener("mouseover", () => {
    box.style.backgroundColor = colours[0];
  });
}

button.addEventListener("click", () => {
  colours.unshift(colours.pop());
  console.log(colours);
});
