const colors = [
  "tomato",
  "#d4d8d6",
  "orange",
  "#f1f5f8",
  "rgb(120, 45, 85)",
  "red",
  "silver",
  "purple",
  "#a15ef5",
];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  const random = getRandomNumber();
  document.body.style.backgroundColor = colors[random];
  color.textContent = colors[random];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
