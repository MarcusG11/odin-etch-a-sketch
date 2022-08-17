document.querySelector("button").addEventListener("click", () => {
  let gridNumber = prompt("How many grids would you like to draw on?");
  if (gridNumber <= 100) {
    return gridNumber;
  } else {
    alert("Uh oh! The maxium input allowed is 100.");
  }
});

const div1 = document.createElement("div");
const div2 = document.createElement("div");
const div3 = document.createElement("div");
const div4 = document.createElement("div");
const div5 = document.createElement("div");
const div6 = document.createElement("div");
const div7 = document.createElement("div");
const div8 = document.createElement("div");
const div9 = document.createElement("div");
const div10 = document.createElement("div");
const div11 = document.createElement("div");
const div12 = document.createElement("div");
const div13 = document.createElement("div");
const div14 = document.createElement("div");
const div15 = document.createElement("div");
const div16 = document.createElement("div");

div1.classList.add("sketch-area");
div2.classList.add("sketch-area");
div3.classList.add("sketch-area");
div4.classList.add("sketch-area");
div5.classList.add("sketch-area");
div6.classList.add("sketch-area");
div7.classList.add("sketch-area");
div8.classList.add("sketch-area");
div9.classList.add("sketch-area");
div10.classList.add("sketch-area");
div11.classList.add("sketch-area");
div12.classList.add("sketch-area");
div13.classList.add("sketch-area");
div14.classList.add("sketch-area");
div15.classList.add("sketch-area");
div16.classList.add("sketch-area");

document.querySelectorAll(".sketch-area").forEach((item) => {
  item.addEventListener("hover", (event) => {});
});

const container = document.querySelector(".divscontainer");
container.append(div1);
container.append(div2);
container.append(div3);
container.append(div4);
container.append(div5);
container.append(div6);
container.append(div7);
container.append(div8);
container.append(div9);
container.append(div10);
container.append(div11);
container.append(div12);
container.append(div13);
container.append(div14);
container.append(div15);
container.append(div16);
