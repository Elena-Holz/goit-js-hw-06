const inputRng = document.querySelector("#font-size-control");
const spanText = document.querySelector('#text');

inputRng.addEventListener('change', (event) => {
spanText.style.fontSize = inputRng.value + 'px';
});

