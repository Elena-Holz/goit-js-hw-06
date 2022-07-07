const inputTeg = document.querySelector('input');
const inputEl = document.querySelector("#validation-input");

let elLength = Number(inputTeg.getAttribute('data-length'));

inputEl.addEventListener("change", (event) => {
      const inputText = event.target.value;
      if (inputText.length === elLength) {
        inputEl.classList.remove("invalid");
        inputEl.classList.add("valid");
      } else {
        inputEl.classList.remove("valid");
        inputEl.classList.add("invalid");
      };
    });
    




    