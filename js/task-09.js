function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyStyle = document.querySelector('body');
const clickButton = document.querySelector('.change-color');
const span = document.querySelector('.color');

clickButton.addEventListener('click', (event) => {
bodyStyle.style.backgroundColor = getRandomHexColor();
span.textContent = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
});
