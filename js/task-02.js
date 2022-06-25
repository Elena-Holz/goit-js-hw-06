const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const liEl1 = document.createElement('li');
// const liEl2 = document.createElement('li');
// const liEl3 = document.createElement('li');
// const liEl4 = document.createElement('li');
// const liEl5 = document.createElement('li');
// const liEl6 = document.createElement('li');

// liEl1.textContent = ingredients[0];
// liEl2.textContent = ingredients[1];
// liEl3.textContent = ingredients[2];
// liEl4.textContent = ingredients[3];
// liEl5.textContent = ingredients[4];
// liEl6.textContent = ingredients[5];

// liEl1.classList.add('item');
// liEl2.classList.add('item');
// liEl3.classList.add('item');
// liEl4.classList.add('item');
// liEl5.classList.add('item');
// liEl6.classList.add('item');

// const ulEl = document.querySelector('#ingredients');
// console.log(ulEl);

// ulEl.append(liEl1, liEl2, liEl3, liEl4,liEl5, liEl6);

const liElements = ingredients.map(ingredient => {
  const liEl = document.createElement('li');
  liEl.textContent = ingredient;
  liEl.classList.add('item');
  return liEl;

});

console.log(liElements);
const ulEl = document.querySelector('#ingredients');
ulEl.append(...liElements);
