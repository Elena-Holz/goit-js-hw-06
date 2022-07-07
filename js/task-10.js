function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input');
console.log(inputEl);
const btnGreat = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const divBox = document.querySelector('#boxes');
console.log(divBox);


btnGreat.addEventListener('click', getInputAmount);

function getInputAmount() {
  const amount = inputEl.value;
  createBoxes(amount);
};

function createBoxes(amount) {
    for (let i = 1; i <= amount; i+= 1) {
const divEl = document.createElement('div');

  let width = 30 + i * 10;
  let height = 30 + i * 10;
  let randomColor = getRandomHexColor();
  divEl.style.width = `${width}px`;
  divEl.style.height = `${height}px`;
  divEl.style.backgroundColor = randomColor;
      divBox.append(divEl);
    }
};
   
btnDestroy.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  divBox.innerHTML = "";
}


// createBoxes(3);
// btnGreat.addEventListener('click', createBoxes());

// function createBoxes(amount) {
//   for (let i = 1; i <= amount; i+= 1) {
//     const divEl = document.createElement('div');
//     // divEl.style.width = '30px';
//     // divEl.style.height = '30px';
//     // divEl.style.backgroundColor = getRandomHexColor();
//     console.log(divEl);
//     divBox.append(divEl);
//   }
  
  
// }
//   if (amount === 1) {
//     const divEl = document.createElement('div');
//     divEl.textContent = 'HI';
//     let windth = '30px';
//     let height = '30px';
//     divEl.style.width = windth;
//     divEl.style.height = height;
//   for (i = 1; i <= amount; i += 1) {
    
//     width = +'10px';
//     height = +'10px';
//     divEl.style.backgroundColor = getRandomHexColor();
//     // console.log('divEl');
//    divBox.append(divEl);
//   }
// }
//   // break;
// }

// // divBox.append(...arrDiv);
// createBoxes();
