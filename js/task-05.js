const refs = {
    input: document.querySelector('#name-input'),
    nameSpan: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (refs.input.value === "") {
        refs.nameSpan.textContent = 'Anonymous'; 
    } else {
    refs.nameSpan.textContent = event.currentTarget.value;
    }  
};

