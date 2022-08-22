const container = document.querySelector(".divscontainer");

document.querySelector("button").addEventListener("click", () => {
  let gridNumber = prompt("How many grids would you like to draw on?");
  if (gridNumber <= 100) {
    while (container.hasChildNodes()) {
      container.removeChild(container.firstChild);
    }
    let rows = gridNumber;
    let cols = gridNumber;
    howManyDivs(rows, cols);
  } else {
    alert("Uh oh! The maximum input allowed is 100.");
  }
});

function howManyDivs(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (let i = 0; i < rows * cols; i++) {
    let div = document.createElement("div");
    container.appendChild(div).classList.add(i);
  }
  const children = document.querySelectorAll(".divscontainer > *");
  for (let i = 0; i < children.length; i++) {
    children[i].addEventListener("mouseenter", () => {
      children[i].style.backgroundColor = "black";
    });
  }
}
