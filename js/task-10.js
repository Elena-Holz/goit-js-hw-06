function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnGreat = document.querySelector('button');
// const btnDestroy = document.querySelector([data-destroy]);
const divBox = document.querySelector('#boxes');

btnGreat.addEventListener('click', createBoxes());
function createBoxes(amount) {
  if (amount === 1) {
    const divEl = document.createElement('div');
    divEl.textContent = 'HI';
    let windth = '30px';
    let height = '30px';
    divEl.style.width = windth;
    divEl.style.height = height;
  for (i = 1; i <= amount; i += 1) {
    
    divEl.style.width = '30px';
    divEl.style.height = '30px';
    divEl.style.backgroundColor = getRandomHexColor();
    // console.log('divEl');
   divBox.append(divEl);
  }
}
  // break;
}

// divBox.append(...arrDiv);
createBoxes();
