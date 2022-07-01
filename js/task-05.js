const refs = {
    input: document.querySelector('#name-input'),
    nameSpan: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    refs.nameSpan.textContent = event.currentTarget.value;
};

