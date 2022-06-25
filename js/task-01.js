
// const ulArr = document.querySelectorAll('#categories>li');

const navLinkEl = document.querySelectorAll('.item');
console.log("Number of categories:", navLinkEl.length);

navLinkEl.forEach((el) => {
const navLinkTitle = el.querySelector('h2');
console.log(`Category: ${navLinkTitle.textContent}`);
console.log(`Elements: ${el.lastElementChild.children.length}`);
});



