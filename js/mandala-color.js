document.addEventListener("DOMContentLoaded", () => {
let selectedColor = "#f44336";

// Selector de color
const colorPicker = document.getElementById("colorPicker");
colorPicker.addEventListener("input", (e) => {
  selectedColor = e.target.value;
});

// Mandala para pintar
const svg = document.getElementById("mandala-svg-pintable");
if (svg) {
  svg.addEventListener("click", (e) => {
    if (e.target.tagName !== "svg") {
      e.target.setAttribute("fill", selectedColor);
    }
  });
}

});
