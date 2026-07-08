function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector("button.change-color");
function handleClick(){
  let color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  const spanColor = document.querySelector("span.color");
  spanColor.textContent=color;
}
button.addEventListener("click", handleClick);