// const elements = {
//     input: document.querySelector('input'),
// };
// console.log(elements.input);

// elements.input.addEventListener('focus', onInputFocus);
// elements.input.addEventListener('blur', onIputBlur);

// const totalLength = elements.input.getAttribute('data-length');


// function onInputFocus() {
// console.log('This is focus');
// };
// function onIputBlur() {
//     if (elements.input.getAttribute('data-length') === 6) {
//         // elements.input.classList.remove("valid");
//         elements.input.classList.add('invalid');
        
//     } else {
//         // elements.input.classList.remove("invalid");
//         elements.input.classList.add('valid');
        
//     };
//     console.log('This is not focus');
// };

// console.log(elements.input.getAttribute('data-length'));
// myPhone.addEventListener('keyup', function(evt){

    let inputEl = document.querySelector("#validation-input");

    let inputLength = inputEl.dataset.length;
    // console.log(Number(inputLength)); //6
    
    const input = document.querySelector("input");
    inputEl.addEventListener("change", (e) => {
      const text = e.target.value;
      console.log(text);
      text.length === +inputLength ? inputEl.classList.add("valid") : inputEl.classList.add("invalid");
    });
    